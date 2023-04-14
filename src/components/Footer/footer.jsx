import React from 'react'
import './footer.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-top'>
        <div className='app__footer-info_contact'>
          <h2 className='header-2'>Contact Me</h2>
          <p className='paragraph-1'>1111 Mcwood St, West Covina, CA 91790, USA</p>
          <p className='paragraph-1'>+1 626-678-5363</p>
          <p className='paragraph-1'>+1 626-678-5363</p>
        </div>
        <div className='app__footer-info_name'>
          <h1 className='header-1'>Michael Wang</h1>
          <p className='content-1'>"The best way to find yourself is to lose yourself in the depth of creating a beautiful website”</p>
        </div>
        <div className='app__footer-info_hours'>
          <h2 className='header-2'>Availabe Hours</h2>
          <p className='paragraph-1'>Monday-Friday</p>
          <p className='paragraph-1'>01:00 pm - 09:00 pm PST</p>
          <p className='paragraph-1'>Saturday-Sunday</p>
          <p className='paragraph-1'>01:00 pm - 6:00 pm PST</p>
        </div>
      </div>
      <div className='app__footer-bottom'>
        <h1 className='header-2'>Available for Immediate Employment</h1>
        <div className='app__footer-bottom_button'>
          <button type='button' className='custom__button'>Contact Me Now</button>
        </div>
        <div className='app__footer-bottom_socialmedia'>
          <div className='app__footer-bottom_socialmedia_email'>
            <a href="mailto:michaelwangcodex@gmail.com">
              <HiOutlineMail />
            </a>
          </div>
          <div className='app__footer-bottom_socialmedia_linkedin'>
            <a href="https://www.linkedin.com/in/michael-wang-programming/">
              <BsLinkedin />
            </a>
          </div>
          <div className='app__footer-bottom_socialmedia_github'>
            <a href="https://github.com/michaelwang07">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer