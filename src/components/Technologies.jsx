import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMongoose } from "react-icons/si";



const Technologies = () => {
  return (
    <div className=' border-b border-neutral-900 pb-24'>
      <h2 className=' my-20 text-center text-4xl'>Technologies</h2>
      <div className=' flex flex-wrap items-center justify-center gap-4'>
        <div className=' rounded-2xl border-4 border-neutral-900 p-4'>
          <SiMongodb className=' text-green-500 text-7xl' />
        </div>
        <div className=' rounded-2xl border-4 border-neutral-900 p-4'>
          <SiExpress className='  text-7xl' />
        </div>
        <div className=' rounded-2xl border-4 border-neutral-900 p-4'>
          <RiReactjsLine className=' text-cyan-400 text-7xl' />
        </div>
        <div className=' rounded-2xl border-4 border-neutral-900 p-4'>
          <FaNodeJs className=' text-green-500 text-7xl' />
        </div>
        <div className=' rounded-2xl border-4 border-neutral-900 p-4'>
          <SiTailwindcss className=' text-cyan-400 text-7xl' />
        </div>
        <div className=' rounded-2xl border-4 border-neutral-900 p-4'>
          <SiRedux className=' text-purple-900 text-7xl' />
        </div>
        <div className=' rounded-2xl border-4 border-neutral-900 p-4'>
          <SiMongoose className=' text-red-900 text-7xl' />
        </div>
      </div>
    </div>
  )
}

export default Technologies