import Image from 'next/image'
import React from 'react'
import img1 from '../public/maria-about.jpg'

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-6 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#ca51e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>I am a Web Developer & Social media manager</p>
                <p className='py-2 text-gray-600'>I am a fresh computer science & a front-end bootcamp graduate with more than 3 years of expirence in social media 
                    management and marketing who managed more than 10 accounts on Instagram, Pintrest & tiktok to reach more than 
                    70K followers just organic reach.
                </p>
                <p className='py-2 text-gray-600'>& A Front-End Web Developer passionate about implementing visual components on a website. Well-versed in responsive 
                    websites for a better user experience, with a strong skill set in project management and a background in UX design.</p>

                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my lastest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl text-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image className='w-full rounded-xl' src={img1} alt="/" width='275' height='225'/>
            </div>
        </div>
    </div>
  )
}

export default About