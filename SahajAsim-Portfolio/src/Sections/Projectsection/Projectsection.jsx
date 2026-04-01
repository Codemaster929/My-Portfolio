import React from 'react'
import ProjectCards from './ProjectCards'

const Projectsection = () => {
  return (
    <div id='projects' className=' scroll-mt-20 mt-15 bg-black/5 backdrop-blur-xs border-transparent shadow-[8px_8px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(255,255,255,0.3)] rounded-xl  text-white h-120 w-2/3 m-auto p-5 overflow-auto scroll-smooth custom-scrollbar'>
<h1   className='font-bold text-3xl mb-10'>Projects</h1>
<div className='flex flex-wrap gap-10  pl-20 '>
<ProjectCards/>


</div>
    </div>
  )
}

export default Projectsection
