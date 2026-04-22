import React, { useState, useRef, useEffect } from 'react';
import { askGemini } from './Gemini';

const Chatbotsection = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi, I'm Nova! Ask me anything about Sahaj and their work ✦" }
  ]);
  const chatHistory = useRef([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const bottomRef = useRef(null);
  const sectionRef = useRef(null);

  // Show chatbot when user scrolls near the bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setVisible(scrolledToBottom);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userText = input.trim();

    setMessages(prev => [...prev,
      { role: 'user', text: userText },
      { role: 'bot', text: '...' }
    ]);
    setInput('');
    setLoading(true);

    const botReply = await askGemini(chatHistory.current, userText, (streamedText) => {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: 'bot', text: streamedText };
        return updated;
      });
    });

    chatHistory.current = [
      ...chatHistory.current,
      { role: 'user', parts: [{ text: userText }] },
      { role: 'model', parts: [{ text: botReply }] },
    ];

    setLoading(false);
  };

  return (
    <div ref={sectionRef} id="chatbot">

      {/* Floating chatbot — bottom LEFT, only visible when scrolled down */}
      <div className={`fixed bottom-6 left-6 z-50 w-80 font-sans transition-all duration-500
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>

        {/* Chat window */}
        {isOpen && (
          <div className="mb-3 rounded-2xl overflow-hidden border border-white/10"
            style={{
              background: 'rgba(10, 10, 20, 0.95)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.6)'
            }}>

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10"
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 
                  shadow-[0_0_6px_2px_rgba(192,132,252,0.8)]" />
                <span className="text-white font-bold text-base tracking-wide">Nova</span>
              </div>
              <button onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-white text-lg transition">✕</button>
            </div>

            {/* Messages */}
            <div className="flex flex-col space-y-2 p-3 overflow-y-auto max-h-64"
              style={{ scrollbarWidth: 'none' }}>
              {messages.map((msg, i) => (
                <div key={i} className={`text-sm px-3 py-2 rounded-xl max-w-[85%] leading-relaxed
                  ${msg.role === 'user'
                    ? 'ml-auto text-right text-white border border-white/10'
                    : 'mr-auto text-gray-200 border border-white/5'}`}
                  style={{
                    background: msg.role === 'user'
                      ? 'rgba(255,255,255,0.08)'
                      : 'rgba(255,255,255,0.04)'
                  }}>
                  {msg.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-3 py-2 border-t border-white/10"
              style={{ background: 'rgba(255,255,255,0.03)' }}>
              <input
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-600"
                placeholder="Ask Nova..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="text-xs px-3 py-1.5 rounded-lg font-semibold text-black transition disabled:opacity-40"
                style={{ background: loading ? '#555' : '#fff' }}>
                {loading ? '...' : 'Send'}
              </button>
            </div>
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-2xl 
            border border-white/10 text-white font-semibold text-sm transition 
            hover:border-white/20"
          style={{
            background: 'rgba(10,10,20,0.95)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.5)'
          }}>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-purple-400 
              shadow-[0_0_6px_2px_rgba(192,132,252,0.8)]" />
            <span>Nova Here! &#128075;</span>
          </div>
          <span className="text-gray-400 text-xs">{isOpen ? '▼' : '▲'}</span>
        </button>

      </div>
    </div>
  );
}

export default Chatbotsection;