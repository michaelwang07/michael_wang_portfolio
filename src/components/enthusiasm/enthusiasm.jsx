import React from 'react'
import './enthusiasm.css'
import enthusiasm from '../../assets/coding_portfolio.jpg'

const Enthusiasm = () => {
  return (
    <div className='app__enthusiam section__padding'>
      <div className='app__enthusiam-description'>
        <h4 className='content-1'>Remarkable results as individuals and as a team</h4>
        <h1 className='header-2'>Enthusiasm and Willpower</h1>
        <p className='paragraph-1'>
        I am passionate about coding and building things that are visually appealing and functional and am eager to learn and improve my skills. I am also open to feedback, suggestions, and training, and receptive to mentorship and coaching from their senior colleagues. My growth mindset and positive energy will have a positive impact on team morale.
        </p>
      </div>
      <div className='app__enthusiam-image'>
        <img src={enthusiasm} alt="hard working programmer" />
      </div>
      <div className='app__enthusiam-adaptablility'>
        <div className='app__enthusiam-adaptablility_description'>
          <h4 className='content-1'>Flexibile and constantly evolving for continuous growth</h4>
          <h1 className='header-2'>Adaptability and Growth</h1>
          <p className='paragraph-1'>
          Adapatable to new technologies, programming approaches, and compnay cunltures. I have not developed deeply ingrained habits and preferneces, and therefore more open to new ideas and diverse projects. I have the potential to grow and become a valuable member of your team. As I learn and gain experiecne, I will take on more responsibilities, and contribute more the team and company. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Enthusiasm