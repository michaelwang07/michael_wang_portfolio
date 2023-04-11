import React from 'react'
import '../App.css'
import Navbar from '../components/navbar/navbar'
import AboutTitle from '../components/about/About'
import About_Me from '../components/about_me/about_me'
import Footer from '../components/Footer/footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutTitle />
      <About_Me />
      <Footer />
    </div>
  )
}

export default About