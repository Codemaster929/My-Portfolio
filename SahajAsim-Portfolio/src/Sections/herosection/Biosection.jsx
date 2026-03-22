import React from 'react'
import { FileDown } from 'lucide-react';
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import mail from '../../assets/mail.svg'
const Biosection = () => {
  return (
    <div className='  w-2/3 h-80 p-3 flex gap-10 flex-col' >
      <h1 className='text-3xl font-bold '>Hi,there &#128075;</h1>
      <p className='text-[18px] font-semibold'> Sahaj here ,Turning ideas into reality through clean, responsive web experiences.Proficient in React, JavaScript, HTML, CSS, and Tailwind. Always learning, always building. </p>
      <div className='flex justify-between px-5 mt-10'>
       <button className='flex gap-2 border-3 rounded py-1 px-2 font-bold cursor-pointer  active:scale-95  hover:scale-105 transition-transform' >
        Resume <FileDown strokeWidth={1.9} />
       </button>
  <div className='flex gap-5 items-center cursor-pointer'>
    <a href="https://www.linkedin.com/in/sahaj-asim-72567a294/?skipRedirect=true" target='_blank'>
    <img className='h-5 w-5 active:scale-95 hover:scale-125 transition-transform' src={linkedin} lin />
    </a>
    <a href="https://github.com/Codemaster929?tab=overview&from=2026-03-01&to=2026-03-22" target='_blank'>
    <img className='h-5 w-5 active:scale-95 hover:scale-125 transition-transform' src={github} alt="" />
    </a>
 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sahaj.asim.official@gmail.com&su=Portfolio Inquiry" target='_blank'>
    <img className='h-5 w-5 active:scale-95 hover:scale-125 transition-transform' src={mail} alt="" />

 </a>
  </div>
      </div>
    </div>
  )
}

export default Biosection
