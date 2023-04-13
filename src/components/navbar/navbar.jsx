import React from 'react'
import './navbar.css'
import {HiOutlineMenu, HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'

const navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className='app__navbar'>
      <div className='app__navbar-mynmae'>
        <a href="">
          <h1 className='header-1'>Michael Wang</h1>
        </a>
      </div>
      <ul className='app__navbar-links'>
        <li>
          <a href="/" className='content-2'>Home</a>
        </li>
        <li>
          <a href="/about" className='content-2'>About</a>
        </li>
        <li>
          <a href="/resume" className='content-2'>Resume</a>
        </li>
        <li>
          <a href="/contact" className='content-2'>Contact</a>
        </li>
        <li>
          <div className='app__navbar-socialmedia'>
            <div className='app__navbar-socialmedia_email'>
              <a href="mailto:michaelwangcodex@gmail.com">
                <HiOutlineMail />
              </a>
            </div>
            <div className='app__navbar-socialmedia_linkedin'>
              <a href="https://www.linkedin.com/in/michael-wang-programming/">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </li>
      </ul>

      <div className='app__navbar-smallscreen'>
        <div className='app__navbar-smallscreen_menu'>
          <HiOutlineMenu fontSize={30} className='menu' onClick={() => {
            if(toggleMenu) {
              setToggleMenu(false);
            } else {
              setToggleMenu(true);
            }
          }} />
        </div>
        {toggleMenu && (
        <ul className='app__navbar-smallscreen_links'>
          <li>
            <a href="/" className='content-2'>Home</a>
          </li>
          <li>
            <a href="/about" className='content-2'>About</a>
          </li>
          <li>
            <a href="/resume" className='content-2'>Resume</a>
          </li>
          <li>
            <a href="/contact" className='content-2'>Contact</a>
          </li>
        </ul>
        )}
      </div>

    </div>
  )
}

export default navbar