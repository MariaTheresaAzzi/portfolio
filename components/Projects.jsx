import React from 'react'
import ProjectItem from './ProjectItem'
import project1 from '../public/assests/project/aespa.jpg'
import project2 from '../public/assests/project/nft.jpg'
import project3 from '../public/assests/project/movie.jpg'
import project4 from '../public/assests/project/dilumn.jpg'

function Projects() {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-6 py-10'>
            <p className='text-xl tracking-widest uppercase text-[#ca51e5]'>Projects</p>
            <h2 className='py-4'>What I've built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem
            title='Band Website'
            backgroundImg={project1}
            text='JavaScript (DOM)'
            projectUrl='/band'/>
            <ProjectItem
            title='NFT Website'
            backgroundImg={project2}
            text='JavaScript'
            projectUrl='/nft'/>
            <ProjectItem
            title='Movie Website'
            backgroundImg={project3}
            text='JavaScript (APIs)'
            projectUrl='/movie'/>
            <ProjectItem
            title='Dilumn Website'
            backgroundImg={project4}
            text='React'
            projectUrl='/ecom'/>
            </div>
        </div>
    </div>
  )
}

export default Projects