

import React from 'react'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div id='about' className='w-full ms:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#1a9113]'>About</p>
            <h2 className='py-4'>Who I Am</h2>
            
            <p className=' py-2 text-gray-600'>I am a business owner located in southeastern Wisconsin specializing in property management and education. 
            I have always had a knack for technology and working with computers. I needed to learn modern web development in order to build and deploy websites/applications for my businesses. I am now spending my time building projects with React, Next, Firebase, and learning new technologies. </p>
            
            <a href='https://github.com/stevelardog' target='_blank' rel='noreferrer' ><p className=' py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest Projects</p> </a>
            </div>
            
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl ' src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About