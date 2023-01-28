import Image from 'next/image'
import React from 'react'
import img1 from '../public/assests/skills/html2.jpg'
import img2 from '../public/assests/skills/css.png'
import img3 from '../public/assests/skills/JavaScript.png'
import img4 from '../public/assests/skills/tailwindcss.png'
import img5 from '../public/assests/skills/bootstrap1.png'
import img6 from '../public/assests/skills/React.png'
import img7 from '../public/assests/skills/vue1png.png'
import img8 from '../public/assests/skills/next-js.png'
import img9 from '../public/assests/skills/TYPE.jpg'
import img10 from '../public/assests/skills/shopify.png'
import img11 from '../public/assests/skills/figma.png'




function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-6'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#ca51e5]'>Skills</p>
            <h2 className='py-4'>Web Development Skills</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={img1} width="60" height="50" alt='html'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>
            </div>
            </div>
            
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={img2} width="50" height="50" alt='css'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={img3} width="110" height="90" alt='js'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>JAVASCRIPT</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={img4} width="80" height="50" alt='tailwind'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>TAILWIND CSS</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={img5} width="70" height="50" alt='bootstrap'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>BOOTSTRAP</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={img6} width="70" height="50" alt='react'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>REACT JS</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={img7} width="50" height="50" alt='vue'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>VUE JS</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={img8} width="80" height="50" alt='next'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>NEXT JS</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={img9} width="60" height="50" alt='typescript'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>TYPESCRIPT</h3>
                </div>
            </div>
            </div>

            
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={img10} width="70" height="50" alt='shopify'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>SHOPIFY</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={img11} width="70" height="50" alt='figma'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>FIGMA</h3>
                </div>
            </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Skills