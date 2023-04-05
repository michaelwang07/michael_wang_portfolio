import React from 'react'
import './websites.css'
import Fine_Dining from '../../assets/fine_dining.jpg'

const Websites = () => {
  return (
    <div className='app__websites section__padding'>
      <div className='app__websites-image'>
        <a href=""><img src={Fine_Dining} alt="" /></a>
      </div>
    </div>
  )
}

export default Websites