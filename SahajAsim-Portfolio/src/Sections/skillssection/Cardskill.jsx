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
className='bg-gray-900 w-20 flex flex-col items-center justify-between p-2 rounded-2xl'>
<img className='h-10 w-10 hover:scale-105' src={ishovered? props.hoverIcon:props.normalIcon}alt="" />
<p className='font-semibold'>{props.name}</p>
    </div>
  )
}

export default Cardskill
