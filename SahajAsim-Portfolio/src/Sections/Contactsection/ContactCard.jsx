import React from 'react'
import messageicon from '../Contactsection/message.svg'
const ContactCard = () => {
  return (
    
    <div className='flex flex-col '>
      <div className='flex gap-5 '>
 <input type="text" className='h-12 w-92 border-1 rounded bg-slate-950/60 border-gray-700 p-2' placeholder='Name' />
      <input type="text"  className='h-12 w-93 border-1 rounded  bg-slate-950/60 border-gray-700 p-2' placeholder='Email'/>
      </div>
     <textarea className='h-50 resize-none mt-2 w-190 border-1 rounded  bg-slate-950/60 border-gray-700 p-4 align-top' placeholder='Drop a note with any website feedback or career opportunities, or just say hi. Where are you from? 😊 flex flex-wrap'></textarea>

     <button className='bg-gray-200 text-black flex rounded font-bold items-center gap-3 justify-center w-190 mt-2 h-10 active:scale-95 '>Send Message <img className='h-5 w-5' src={messageicon} alt="" /></button>
    </div>
  )
}

export default ContactCard
