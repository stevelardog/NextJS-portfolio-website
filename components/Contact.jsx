import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id ='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#20B418]'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
    {/* left  */}

    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
        <div className='lg:p-4 h-full rounded-xl'>
            <div>
            <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="/" />
            </div>

            <div>
                <h2 className='py-2'>Name here</h2>
                <p>Web Developer</p>
                <p className='py-4'> I&apos;m available for full-time positions. Contact me and let&apos;s talk</p>
            
        </div>
        <div>
            <p className='uppercase pt-8'>Connect with Me</p>
            <div className='flex items-center justify-between py-4'>
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
              
            </div>
            </div>
        </div>
    </div>
    {/* right */}
 
 <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
<div className='p-4'>
    <form
    action='https://getform.io/f/a34d0a7e-e069-4ad3-9c28-39cdd2b5a39a'
    method='POST'
    encType='multipart/form-data'
    >
       <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name'/>

        </div>
        <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Number</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone'/>

        </div>     
        </div> 
<div className='flex flex-col py-2'>
    <label className='uppercase text-sm py-2'>EMAIL</label>
    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email'/>
</div>
<div className='flex flex-col py-2'>
    <label className='uppercase text-sm py-2'>Subject</label>
    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject'/>
</div>
<div className='flex flex-col py-2'>
    <label className='uppercase text-sm py-2'>Message</label>
    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message'></textarea>
</div>
<button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
            </form>
            </div>
            </div>
           </div>
           <div className='flex justify-center py-12'>
            <Link  href='/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp className='text-[#1a9113]' size={30}/>
                </div>
            </Link>
           </div>
        </div>
    </div>
  )
}

export default Contact