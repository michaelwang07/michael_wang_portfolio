import React from 'react'
import './websites.css'
import Fine_Dining from '../../assets/fine_dining.jpg'
import GPT from '../../assets/22.jpg'

const Websites = () => {
  return (
    <div className='app__websites section__padding'>
      <div className='app__websites-description'>
        <h4 className='content-1'> Built for all devices including mobile phones</h4>
        <h1 className='header-2'>Professional Designs</h1>
        <p className='paragraph-1'>
        Are you looking for a website that not only functions flawlessly but also looks visually stunning? I believe that a website should not only be functional but also leave a lasting impression on its users. That's why I pay attention to every detail, from the color scheme to the font size, to create a cohesive and aesthetically pleasing design. Click on a website to see for yourself!
        </p>
      </div>
      <div className='app__websites-links'>
        <div className='app__websites-links_finedine'>
          <a href="https://michaelwang07.github.io/fine_dining_react/" className='content-2' ><h4>Fine Dining</h4></a>
          <div className='app__websites-links_image'>
            <a href="https://michaelwang07.github.io/fine_dining_react/"><img src={Fine_Dining} alt="" /></a>
          </div>
        </div>
        <div className='app__websites-links_chatgpt'>
          <a href="https://michaelwang07.github.io/react_app_one/" className='content-2' ><h4>Chat GPT</h4></a>
          <div className='app__websites-links_image'>
            <a href="https://michaelwang07.github.io/react_app_one/"><img src={GPT} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Websites