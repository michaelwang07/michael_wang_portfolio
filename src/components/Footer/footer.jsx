import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-top'>
        <div className='app__footer-info_contact'>
          <h2>Contact Me</h2>
          <p>1111 Mcwood St, West Covina, CA 91790, USA</p>
          <p>+1 626-678-5363</p>
          <p>+1 626-678-5363</p>
        </div>
        <div className='app__footer-info_name'>
          <h1>Michael Wang</h1>
          <p>"The best way to find yourself is to lose yourself in the depth of creating a beautiful website”</p>
        </div>
        <div>
          <h2>Availabe Hours</h2>
          <p>Monday-Friday</p>
          <p>01:00 pm - 09:00 pm PST</p>
          <p>Saturday-Sunday</p>
          <p>01:00 pm - 6:00 pm PST</p>
        </div>
      </div>
      <div className='app__footer-bottom'>
        <h1>Available for Immediate Employment</h1>
        <button type='button'>Contact Me Now</button>
        <div className='app__footer-bottom_socialmedia'>

        </div>
      </div>
    </div>
  )
}

export default Footer