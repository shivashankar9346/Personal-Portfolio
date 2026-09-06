import React from 'react'
import {Hero} from '@/section/Hero'
import {Navbar} from '@/layout/Navbar'
import {About} from '@/section/About'
import {Experience} from '@/section/Experience'
import {Projects} from '@/section/Projects'
import {Contact} from '@/section/Contact'
import { Footer } from './layout/Footer'


const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  )
}

export default App