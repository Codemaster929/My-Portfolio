import React from 'react'

const Nabar = () => {
  return (
    <div className='flex justify-around bg-transparent  text-white p-4 font-bold text-xl  '>
      <h1 className='cursor-pointer font-extrabold text-2xl '>Sahaj Asim</h1>
      <div className='flex gap-5 items-center'> 
       <a href="/">Home</a>
       <a href="/projects">Projects</a>
       <a href="/contact">Contact Me</a>
      </div>
    </div>
  )
}

export default Nabar