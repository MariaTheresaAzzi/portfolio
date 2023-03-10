import React from 'react'
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'
import img from '../public/img1.jpg'

function Contact() {
  return (
    <div id='contact' className='w-full lg:h-screen p-6'>
        <div className='max-w-[1240px] m-auto px-2 py-8 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#ca51e5]'>
                Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={img} width="400" height="255" alt='mariaimg'/>
                        </div>
                        <div>
                            <h2 className='py-2'>Name here</h2>
                            <p>Front-End Developer</p>
                            <p className='py-4'>I am available for freelance or full-time positions. Contact me and let&apos;s talk.</p>

                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4'>

                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a href='https://www.linkedin.com/in/maria-theresa-azzi/'>
                    <FaLinkedin/>
                    </a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <a href='https://github.com/MariaTheresaAzzi'>
                    <FaGithub/>
                    </a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <a href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=mariatheresaelkazzi@gmail.com&tf=1'>
                    <AiOutlineMail/>
                    </a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <a href='https://twitter.com/theresa_azzi'>
                    <FaTwitter/>
                    </a>
                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-3 w-full h-auto shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                                </div>
                                <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'> Last Name</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                            </div>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'> Phone Number</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'> Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'> Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'> Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                            </div>
                            <button className='from-[#ca51e5] to-[#d79fe3] w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        <div className='flex justify-center py-12'>
        <Link href='/'>
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp className='text-[#ca51e5]' size={30}/>
            </div>
        </Link>
        </div>
        </div>
    </div>
  )
}

export default Contact