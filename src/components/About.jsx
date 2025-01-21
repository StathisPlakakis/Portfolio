import React from 'react'
import aboutImg from '../assets/Screenshot 2025-01-21 at 4.28.18 PM.png'
import { ABOUT_TEXT } from '../constants/index'

const About = () => {
  return (
    <div className=' border-b border-neutral-900 pb-4'>
      <h2 className=' my-20 text-center text-4xl'>About <span className=' text-neutral-500'>Me</span></h2>
      <div className=' flex flex-wrap'>
        <div className=' w-full lg:w-1/2 lg:p-8'>
          <div className=' flex items-center justify-center'>
            <img src={aboutImg} alt="about" className=' rounded' />
          </div>
        </div>

        <div className=' w-full lg:w-1/2 h-full'>
          <div className=' flex flex-col justify-between items-center lg:justify-start'>
            {ABOUT_TEXT.map((text, index) => (
              <p key={index} className=' my-2 max-w-xl py-6'>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About