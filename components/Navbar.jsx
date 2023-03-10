import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import inpic from '../public/assets/in.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    };
    window.addEventListener('scroll', handleShadow);
  },[])
  
  return (
    

    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]' : 'fixed w-full h-20 z-[100] bg-[#ecf0f3]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Link href='/'><Image src={inpic} alt="/" width='125' height='50' /></Link>
      <div>
        <ul className='hidden md:flex'>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
          </Link>
          <Link   href='#about' scroll={false}>
            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
          </Link>
          <Link  href='#skills' scroll={false}>
            <li  className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
          </Link>
          <Link href='#projects' scroll={false}>
            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
          </Link>
          <Link href='#contact' scroll={false}>
            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
          </Link>
        </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25}/>
          </div>
        </div>   
      </div>
{/* Mobile menu */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] ms:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
          <div className='flex w-full items-center justify-between'>
            <Image src={inpic} alt='/' width='87' height='35' />
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
          </div>
      <div className='border-b border-gray-300 my-4'>
        <p className='w-[85%] md:w-[90%] py-4'>Lets build.</p>
      </div>
      </div>

      <div className='py-4 flex flex-col'>
        <ul className='uppercase'>
          <Link href='/'>
          <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
          </Link>
          <Link href='#about' scroll={false}>
          <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
          </Link>
          <Link href='#skills' scroll={false}>
          <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
          </Link>
          <Link href='#projects' scroll={false}>
          <li onClick={()=> setNav(false)} className='py-4 text-sm'>Projects</li>
          </Link>
          <Link href='#contact' scroll={false}>
          <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
          </Link>
        </ul>
        <div className='pt-40'>
      <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Connect</p>
      <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
      <a href='https://www.linkedin.com/in/steven-larsen-5743a4166/'
                  target='_blank'
                  rel='noreferrer'>
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        <FaLinkedinIn />
        </div>
        </a>
        <a href='https://github.com/stevelardog'
                  target='_blank'
                  rel='noreferrer'>
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        <FaGithub />
        </div>
        </a>
        <a href="mailto:stevenlarsen77@outlook.com">
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        <AiOutlineMail />
        </div>
        </a>
        {/* <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        <BsFillPersonLinesFill />
        </div> */}
        
      </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Navbar