import React from 'react'
import Biosection from './Biosection'
import Imgsection from './Imgsection'

const HeroSection = () => {
  return (
    <div id='home' className='scroll-mt-20 mt-5 bg-black/5 backdrop-blur-xs border-transparent shadow-[8px_8px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(255,255,255,0.3)] rounded-xl  text-white h-90 w-2/3 m-auto p-5 flex gap-2'>
    <Biosection/>
    <Imgsection/>
    </div>
  )
}

export default HeroSection
