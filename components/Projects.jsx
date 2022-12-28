import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cvImg from '../public/assets/projects/cv.png'
import cabinImg from '../public/assets/projects/cabin.png'
import weatherImg from '../public/assets/projects/weather.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#1a9113]'>Projects</p>
            <h2 className='py-4'> What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

           <ProjectItem title='CrptoVerse' 
           backgroundImg={cvImg} 
           projectDes='React JS, Coin Gecko API'
           projectUrl='https://cryptoverseapisl.netlify.app/' />
           <ProjectItem title='Wisconsin Cabins' 
           backgroundImg={cabinImg}
           projectDes='Wordpress' 
           projectUrl='http://wisconsindellscabinrental.com/' />
           <ProjectItem title='Weather App' 
           backgroundImg={weatherImg} 
           projectDes='React JS, OpenWeatherMap API'
           projectUrl='/property' />
            
            
            
            
            </div>
        </div> 
    </div>
  )
}

export default Projects