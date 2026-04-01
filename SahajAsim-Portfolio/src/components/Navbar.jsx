import React from 'react'
import chatbot from '../assets/chatbot.svg';

const Nabar = () => {
  return (
    <div className='flex justify-around backdrop-blur-md bg-black/30  text-white p-4 font-bold text-xl top-0 z-20 sticky  '>
      <h1 className='cursor-pointer font-extrabold text-2xl '>Sahaj Asim</h1>
      <div className='flex gap-5 items-center'> 
       <a href="#chatbot"><img className='h-7 w-7 filter 
 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]  rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.9)] p-1 active:scale-95 ' src={chatbot} alt="chatbot_svg" /></a>
       <a className=' hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] active:scale-95 ' href="#home">Home</a>
       <a className=' hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] active:scale-95 ' href="#projects">Projects</a>
       <a className=' hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] active:scale-95 ' href="#contact">Contact Me</a>
     
      </div>
    </div>
  )
}

export default Nabar