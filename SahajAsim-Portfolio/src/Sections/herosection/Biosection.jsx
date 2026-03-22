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
      <div className='flex justify-between px-5 mt-12'>
       <button className='flex gap-2 border-3 rounded py-1 px-2 font-bold'>
        Resume <FileDown strokeWidth={1.9} />
       </button>
  <div className='flex gap-5 items-center'>
    <img className='h-5 w-5' src={linkedin} lin/>
    <img className='h-5 w-5' src={github} alt="" />
    <img className='h-5 w-5' src={mail} alt="" />
  </div>
      </div>
    </div>
  )
}

export default Biosection
