import React from 'react'
import { PROJECTS } from '../constants/index'
import { FaGithub } from 'react-icons/fa'


const Projects = () => {
  return (
    <div className=' borde-b border-neutral-900 pb-4'>
      <h2 className=' my-20 text-center text-4xl'>Projects</h2>
      <div>{PROJECTS.map((project, index) => (
        <div key={index} className=' mb-8 flex flex-wrap lg:justify-center'>
          <div className=' w-full lg:w-1/4'>
            <img src={project.image} alt={project.title} width={250} height={250} className=' mb-6 rounded' />
          </div>
          <div className=' ml-4 w-full lg:w-3/4 max-w-xl'>
            <h6 className=' mb-2 font-semibold'>{project.title}</h6>
            <p className=' mb-4 text-neutral-400'>{project.description}</p>
            <div className=' flex max-w-lg flex-wrap '>
              {project.technologies.map((technology, index) => (
                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{technology}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" ><FaGithub className=' my-4' /></a>
          </div>
        </div>
      ))}</div>
    </div>
  )
}

export default Projects