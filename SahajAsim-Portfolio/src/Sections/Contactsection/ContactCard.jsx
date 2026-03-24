import React from 'react'
import messageicon from '../Contactsection/message.svg'
import { useState } from 'react';
import Swal from 'sweetalert2'
const ContactCard = () => {

     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  
  const formData = new FormData(event.target);
  formData.append("access_key", "30ae5017-b3dc-4cb7-b8aa-6212ec5416fd");

  try {
    console.log('Form data:', Object.fromEntries(formData));
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    
    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
  title: "Message Sent ",
  text: "I'll get back to you soon!",
  icon: "success",
  background: '#0a0a0a',
  color: '#e5e5e5',
  confirmButtonColor: '#2563eb',
  iconColor: '#10b981',
  showConfirmButton: false,
  timer: 2500, // Auto-close after 2.5 seconds
  timerProgressBar: true,
  backdrop: 'rgba(0, 0, 0, 0.9)'
});
      event.target.reset();
    } else {
      console.log("Error details:", data);
      setResult(data.message || "Error");
    }
  } catch (error) {
    console.log("Fetch error:", error);
    setResult("Submission failed");
  }
};
  return (
    
    <div className='flex flex-col '>
 <form onSubmit={onSubmit}>

        <div className='flex gap-5 '>
       
 <input type="text" name='name' className='h-12 w-92 border rounded bg-slate-950/60 border-gray-700 p-2' placeholder='Name' required />
      <input type="text"  name='email' className='h-12 w-93 border rounded  bg-slate-950/60 border-gray-700 p-2' placeholder='Email' required/>
      </div>
     <textarea name='message' className='h-50 resize-none mt-2 w-190 border rounded  bg-slate-950/60 border-gray-700 p-4 align-top' placeholder='Drop a note with any website feedback or career opportunities, or just say hi. Where are you from? 😊 flex flex-wrap' required></textarea>

     <button type='submit'  className='bg-gray-200 text-black flex rounded font-bold items-center gap-3 justify-center w-190 mt-2 h-10 active:scale-95 '>Send Message <img className='h-5 w-5' src={messageicon} alt="" /></button>  
        </form>
      
    </div>
  )
}

export default ContactCard
