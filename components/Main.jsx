import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='m-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>LETS BUILD</p>
          <h1 className='py-4 text-gray-700'>Hi I&apos;m <span className='text-[#1a9113]' >Steve</span></h1>
          <h1 className='py-2 text-gray-700'>A Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I&apos;m a web developer that has experience in building and designing web solutions.
           Currently, I&apos;m focused on building responsive web applications while learning back-end technologies. </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href='https://www.linkedin.com/in/steven-larsen-5743a4166/'
                  target='_blank'
                  rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
              </div>
              </a>
              <a href='https://github.com/stevelardog'
                  target='_blank'
                  rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
              </div>
              </a>
              <a href="mailto:stevenlarsen77@outlook.com">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
              </div>
              </a>
              {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
              </div> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main