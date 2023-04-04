import React from 'react'
import './navbar.css'
import {HiOutlineMenu} from 'react-icons/hi'

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
          <a href="#home" className='content-1'>Home</a>
        </li>
        <li>
          <a href="#about" className='content-1'>About</a>
        </li>
        <li>
          <a href="#resume" className='content-1'>Resume</a>
        </li>
        <li>
          <a href="#contact" className='content-1'>Contact</a>
        </li>
      </ul>
      {toggleMenu && (
        <div className='app__navbar-smallscreen'>
        <HiOutlineMenu fontSize={30} className='menu' onClick={() => setToggleMenu(true)} />
        <ul className='app__navbar-smallscreen_links'>
          <li>
            <a href="#home" className='content-1'>Home</a>
          </li>
          <li>
            <a href="#about" className='content-1'>About</a>
          </li>
          <li>
            <a href="#resume" className='content-1'>Resume</a>
          </li>
          <li>
            <a href="#contact" className='content-1'>Contact</a>
          </li>
        </ul>
      </div>
      )}
    </div>
  )
}

export default navbar