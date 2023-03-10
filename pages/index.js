
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'




export default function Home() {
  return (
    <div >
      <Head>
        <title>Steven Larsen Portfolio</title>
        <meta name="description" content="Steven Larsen's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />
    <Main />
    <About />
    <Projects />
    <Skills />
    <Contact />
      
    </div>
  )
}
