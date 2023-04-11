import React from 'react'
import './resume.css'
import resume_jpg from '../../assets/resume.jpg'

const resume = () => {
  return (
    <div className='app__resume'>
      <img src={resume_jpg} alt="my resume" />
    </div>
  )
}

export default resume