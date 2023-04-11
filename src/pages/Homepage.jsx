import React from 'react';
import '../App.css'
import Footer from '../components/Footer/footer'
import Enthusiasm from '../components/enthusiasm/enthusiasm'
import Intro from '../components/intro/Intro'
import Navbar from '../components/navbar/navbar'
import Websites from '../components/websites/websites'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Websites />
      <Enthusiasm />
      <Footer />
    </div>
  )
}

export default Homepage
