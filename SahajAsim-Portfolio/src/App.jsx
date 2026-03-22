import React from 'react'
import SpaceBackground from './components/Spacebackground'
import Navbar from './components/Navbar'
import HeroSection from './Sections/herosection/HeroSection'
const App = () => {
  return (
         <div className="app">
      {/* Fixed space background */}
      <SpaceBackground />

      {/* Your content on top */}
      <div className='relative z-10 h-full w-full' >
       <Navbar/>
       <HeroSection/>
        {/* ... your sections */}
      </div>
    </div>

  )
}

export default App
