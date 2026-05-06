import React from 'react'
import chatbot from '../assets/chatbot.svg';

const Nabar = () => {
  return (
    <div className='flex justify-around backdrop-blur-md bg-black/30  text-white p-4 font-bold text-xl top-0 z-20 sticky  '>
      <h1 className='cursor-pointer font-extrabold text-2xl '>Sahaj Asim</h1>
      <div className='flex gap-5 items-center'> 
      
       <a className=' hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] active:scale-95 ' href="#home">Home</a>
       <a className=' hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] active:scale-95 ' href="#projects">Projects</a>
       <a className=' hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] active:scale-95 ' href="#contact">Contact Me</a>
     
      </div>
    </div>
  )
}

export default Nabar