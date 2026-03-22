import React from 'react'
import SpaceBackground from './components/Spacebackground'
import Navbar from './components/Navbar'
import HeroSection from './Sections/herosection/HeroSection'
import Skillsection from './Sections/skillssection/Skillsection'
import Projectsection from './Sections/Projectsection/Projectsection'
import Contactsection from './Sections/Contactsection/Contactsection'
import Footer from './Sections/footer/Footer'
const App = () => {
  return (
         <div className="app">
      {/* Fixed space background */}
      <SpaceBackground />

      {/* Your content on top */}
      <div className='relative z-10 h-full w-full ' >
       <Navbar/>
       <HeroSection/>
       <Skillsection/>
       <Projectsection/>
       <Contactsection/>
       <Footer/>
        {/* ... your sections */}
      </div>
    </div>

  )
}

export default App
