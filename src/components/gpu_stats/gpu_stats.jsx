import React from 'react'
import './gpu_stats.css'
import graph from '../../assets/graph.jpg'

const gpu_stats = () => {
  return (
    <div className='app__statistics section__padding'>
      <div className='app__statistics-description'>
        <h4 className='content-1'>displaying accurate and reliable statistics</h4>
        <h1 className='header-2'>Detailed Statistics</h1>
        <p className='paragraph-1'>
        Websites built for accurate and descriptive statistics, providing up-to-date and meticulously curated data that you can trust. My user-friendly interface makes it easy to navigate and find the information you need quickly and efficiently. My website offers a wealth of valuable insights that can enhance your work and understanding of the world around you for all occupations and industries. Visit the website that I built to experience the power of data-driven decision making!
        </p>
      </div>
      <div className='app__statistics-img'>
        <a href="https://michaelwang07.github.io/GPU-Stats/charts.html" className='content-2'><h4>GPU Stats</h4></a>
        <a href="https://michaelwang07.github.io/GPU-Stats/charts.html" className='app__statistics-img_image'>
          <img src={graph} alt="graph" />
        </a>
        <p class="app__statistics-img_centered">view</p>
      </div>
    </div>
  )
}

export default gpu_stats
