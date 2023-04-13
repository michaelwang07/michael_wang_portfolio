import React from 'react';
import '../App.css'
import Footer from '../components/Footer/footer'
import Enthusiasm from '../components/enthusiasm/enthusiasm'
import Intro from '../components/intro/Intro'
import Navbar from '../components/navbar/navbar'
import Websites from '../components/websites/websites'
import Statistics from '../components/gpu_stats/gpu_stats'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Websites />
      <Enthusiasm />
      <Statistics />
      <Footer />
    </div>
  )
}

export default Homepage
