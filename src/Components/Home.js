import React from 'react'
import '../Styles/Home.css'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function Home() {
  return (
    <div>
      
      <div className='head'>
        <div id='name'><b> Jawad Yaqoob</b></div>
        <div id='skill'>Full Stack Web Developer | ML Enthusiast</div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
