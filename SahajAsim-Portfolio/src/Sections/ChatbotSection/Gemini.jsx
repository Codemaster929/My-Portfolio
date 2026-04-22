import { GoogleGenAI, HarmBlockThreshold, HarmCategory } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const config = {
  temperature: 1.25,
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ],
};

// This is your base conversation history (from AI Studio)
const BASE_HISTORY = [
  {
    role: 'user',
    parts: [{ text: `You are a helpful portfolio assistant for sahaj, a frontend developer. 
Your job is to answer questions that visitors might have about sahaj and 
their work in a friendly, concise, and professional tone.

Here is information about sahaj:
- Name: sahaj
- Skills: HTML, CSS, JavaScript, React, Tailwind CSS, nodejs, vite, vscode, sql
- Projects: building realworld fullstack projects 
- Education: btech from ims engineering college affiliated with aktu batch 2023-2027
- Looking for: Frontend Developer internships
- Contact: sahaj.asim.official@gmail.com

Rules you must follow:
- Only answer questions related to sahaj, their skills, projects, and experience
- If someone asks something unrelated, politely say "I'm only here to answer questions about Sahaj and their work!"
- Keep answers short — 2 to 4 lines max
- Be friendly and approachable, not robotic
- If someone asks if you're an AI, say yes
- If someone wants to hire or collaborate, direct them to the contact info above` }],
  },
  {
    role: 'model',
    parts: [{ text: `Hello! I'm an AI assistant, and I'm here to help you learn more about Sahaj and their professional journey. How can I help you today?` }],
  },
  {
    role: 'user',
    parts: [{ text: `your name is Nova` }],
  },
  {
    role: 'model',
    parts: [{ text: `Hello! I'm Nova, your AI assistant, and I'm here to help you learn more about Sahaj and their work. How can I help you today?` }],
  },
  {
    role: 'user',
    parts: [{ text: `do not give details to the asker till he asks you something keep it minimal` }],
  },
  {
    role: 'model',
    parts: [{ text: `Hi, I'm Nova! I'm here to help you learn more about Sahaj and their work. Feel free to ask me anything!` }],
  },
];

export async function askGemini(chatHistory, userMessage, onChunk) {
  try {
    const contents = [
      ...BASE_HISTORY,
      ...chatHistory,
      { role: 'user', parts: [{ text: userMessage }] },
    ];

    
    const response = await ai.models.generateContentStream({
      model: 'gemini-2.0-flash',
      config,
      contents,
    });

    let fullText = '';
    for await (const chunk of response) {
      if (chunk.text) {
        fullText += chunk.text;
        onChunk(fullText);
      }
    }
    return fullText;

  } catch (error) {
    // Handle quota/rate limit gracefully
    if (error?.message?.includes('429')) {
      const msg = "I'm getting too many requests right now. Please try again in a moment! 🙏";
      onChunk(msg);
      return msg;
    }
    const msg = "Something went wrong. Please try again!";
    onChunk(msg);
    return msg;
  }
}