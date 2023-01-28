import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-700 build-together'>LET&apos;S BUILD SOMETHING TOGRTHER</p>
                <h1>Hi, I&apos;m <span className='text-[#ca51e5]'>MARIA</span></h1>
                <h1 className='py-2 text-gray-700'>A Front-End Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I&apos;ve always been a great problem solver, an independent introvert, 
                and a technophile obsessed with the latest devices. Today, I&apos;m a Frontend developer, I specialize in building responsive websites. 
                I&apos;ve worked on various projects at University and during my bootcamp with Recoded.
                I&apos;m familiar with a variety of programming languages, including HTML, CSS, JavaScript, ReactJS, NextJS, PHP, and SQL, 
                but I&apos;m always adding new skills to my repertoire.</p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedin/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill/>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main