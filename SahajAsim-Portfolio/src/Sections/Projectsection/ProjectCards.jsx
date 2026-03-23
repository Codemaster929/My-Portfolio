import React from 'react'

const ProjectCards = () => {
  return (
    <>
     <div className='h-80 border border-gray-800 bg-slate-950/60 w-60 flex flex-col gap-3 p-2 rounded-xl hover:scale-102 transition-transform cursor-pointer'>
      <img className='h-30 w-55 mx-auto rounded-xl object-cover '
       src="https://images.unsplash.com/photo-1772289238830-2464c7f0e708?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
      <h3 className='font-bold text-xl '>proj_name</h3>
      <p className='text-gray-300 text-xs'>Lorem ipsum dolor sit amet. ipsum, dolor sit amet consectetur adipisicing elit. Autem natus unde quos consequuntur optio!</p>
      <div className='flex gap-2 text-white font-semibold  flex-wrap '>
      <h4 className='bg-gray-600 rounded px-1 border-none text-xs  flex items-center '>React</h4>
      <h4  className='bg-gray-600 rounded px-1 border-none text-xs  flex items-center '>Tailwind</h4>
      <h4 className='bg-gray-600 rounded px-1 border-none text-xs  flex items-center '>html</h4>
      <h4 className='bg-gray-600 rounded px-1 border-none text-xs  flex items-center ' >css</h4>
     
      </div>
      <div className='flex justify-between px2'>
        <button className='bg-white text-black px-1 py-1 text-xs font-bold rounded active:scale-95'>Live link</button>
        <button className='bg-white text-black px-1 py-1 text-xs font-bold rounded active:scale-95 '>Source Code</button>
      </div>
    </div>
    </>
   
  )
}

export default ProjectCards