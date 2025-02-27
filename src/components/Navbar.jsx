import React from 'react'
import logo from '../../public/Sp.png'
import { FaLinkedin, FaGithub } from 'react-icons/fa'



const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className=' flex flex-shrink-0 items-center '>
        <img src={logo} alt="logo" className=' mx-2 w-20' />
      </div>

      <div className=' m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/stathis-plakakis/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/StathisPlakakis" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </nav>
  )
}

export default Navbar