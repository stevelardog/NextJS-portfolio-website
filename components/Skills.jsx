import Image from 'next/image'
import React from 'react'
import csspic from '../public/assets/skills/css.png'
import htmlpic from '../public/assets/skills/html.png'
import firebasepic from '../public/assets/skills/firebase.png'
import githubpic from '../public/assets/skills/github1.png'
import nextjspic from '../public/assets/skills/nextjs.png'
import jspic from '../public/assets/skills/javascript.png'
import nodepic from '../public/assets/skills/node.png'
import reactpic from '../public/assets/skills/react.png'
import sqlpic from '../public/assets/skills/sql.png'
import tailwindpic from '../public/assets/skills/tailwind.png'
import wppic from '../public/assets/skills/wordpress.png'


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 '>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#1a9113]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

{/* GRID ELE */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={htmlpic} alt='/' width='64' height='64' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={csspic} alt='/' width='64' height='64' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={firebasepic} alt='/' width='64' height='64' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Firebase</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={githubpic} alt='/' width='64' height='64' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>GitHub</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={nextjspic} alt='/' width='64' height='64' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>NextJS</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={jspic} alt='/' width='64' height='64' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Javascript</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={nodepic} alt='/' width='64' height='64' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Node JS</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={reactpic} alt='/' width='64' height='64' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={sqlpic} alt='/' width='64' height='64' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>SQL</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={tailwindpic} alt='/' width='64' height='64' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tailwind</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={wppic} alt='/' width='64' height='64' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Wordpress</h3>
                    </div>
                </div>
            </div>



            </div>
        </div>
    </div>
  )
}

export default Skills