import React from 'react'
import './navbar.css'
import {HiOutlineMenu} from 'react-icons/hi'

const navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(true);

  return (
    <div className='app__navbar'>
      <div className='app__navbar-mynmae'>
        <a href="">
          <h1 className='header-1'>Michael Wang</h1>
        </a>
      </div>
      <ul className='app__navbar-links'>
        <li>
          <a href="#home" className='content-2'>Home</a>
        </li>
        <li>
          <a href="#about" className='content-2'>About</a>
        </li>
        <li>
          <a href="#resume" className='content-2'>Resume</a>
        </li>
        <li>
          <a href="#contact" className='content-2'>Contact</a>
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
            <a href="#home" className='content-2'>Home</a>
          </li>
          <li>
            <a href="#about" className='content-2'>About</a>
          </li>
          <li>
            <a href="#resume" className='content-2'>Resume</a>
          </li>
          <li>
            <a href="#contact" className='content-2'>Contact</a>
          </li>
        </ul>
        )}
      </div>

    </div>
  )
}

export default navbar