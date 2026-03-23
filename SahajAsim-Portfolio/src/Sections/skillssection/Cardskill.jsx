import React, { useState } from 'react'


const Cardskill = (props) => {
      const [ishovered, setishovered] = useState(false)
  return (
   
      <div onMouseEnter={()=>{
    setishovered(true)
}} 
onMouseLeave={()=>{
setishovered(false)
}}
className='bg-slate-950/60 border-1 border-gray-800 w-20 flex flex-col items-center justify-center gap-1 p-2 rounded-2xl'>
<img className='h-10 w-10 hover:scale-105 transition-transform' src={ishovered? props.hoverIcon:props.normalIcon}alt="" />
<p className='font-semibold'>{props.name}</p>
    </div>
  )
}

export default Cardskill
