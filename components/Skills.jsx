import Image from 'next/image'
import React from 'react'

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
                    <Image src='/../public/assests/skills/html2.jpg' width="60" height="50"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>
            </div>
            </div>
            
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assests/skills/css.png' width="50" height="50"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assests/skills/JavaScript.png' width="110" height="90"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>JAVASCRIPT</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assests/skills/tailwindcss.png' width="80" height="50"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>TAILWIND CSS</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assests/skills/bootstrap1.png' width="70" height="50"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>BOOTSTRAP</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assests/skills/React.png' width="70" height="50"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>REACT JS</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assests/skills/vue1png.png' width="50" height="50"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>VUE JS</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assests/skills/next-js.png' width="80" height="50"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>NEXT JS</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assests/skills/TYPE.jpg' width="60" height="50"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>TYPESCRIPT</h3>
                </div>
            </div>
            </div>

            
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assests/skills/shopify.png' width="70" height="50"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>SHOPIFY</h3>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assests/skills/figma.png' width="70" height="50"/>
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