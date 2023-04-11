import React from 'react'
import './title.css'

const about_title = ({title}) => {
  return (
    <div className='app__about'>
      <h2 className='content-1'>{title}</h2>
    </div>
  )
}

export default about_title