import React from 'react'
import ContactCard from './ContactCard'

const Contactsection = () => {
  return (
    <div id='contact' className='mt-15 bg-black/5 backdrop-blur-xs border-transparent shadow-[8px_8px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(255,255,255,0.3)] rounded-xl  text-white h-110 w-2/3 m-auto p-5 gap-2'>
    <h1 className='font-bold text-3xl mb-10'>Contact Me</h1>
    <div className=' w-190 mx-auto'>
      <ContactCard/>
    </div>
    </div>
  )
}

export default Contactsection
