import React from 'react'
import './intro.css'
import profile_pic from '../../assets/profile_pic.jpg'

const Intro = () => {
  return (
    <div className='app__intro section__padding'>
      <div className='app__intro-description'>
        <h4 className='content-1'>Frontend developer at the price of an intern</h4>
        <h1 className='header-2'>Cost Effective</h1>
        <p className='paragraph-1'>Junior developers typically have lower salary expectations than more epxerienced develpers, making them a cost-effective and affordable option for companies who want to save cost while still achieving their business objectives</p>
        <button className='custom__button'>Contact</button>
      </div>
      <div className='app__intro-image'>
        <img src={profile_pic} alt="profile" />
      </div>
    </div>
  )
}

export default Intro