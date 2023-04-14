import React from 'react'
import './contact_me.css'

const contact_me = () => {
  return (
    <div className='app__contact section__padding'>
      <div className='app__contact-info'>
      <div className='app__contact-info_network'>
          <h3>Email:</h3>
          <a href="mailto:michaelwangcodex@gmail.com" className='email'><h4>michaelwangcodex@gmail.com</h4></a>
        </div>
        <div className='app__contact-info_network'>
          <h3>Github:</h3>
          <a href="https://github.com/michaelwang07"><h4>michaelwang07</h4></a>
        </div>
        <div className='app__contact-info_network'>
          <h3>Discrod: </h3>
          <h4>Storm Ax#6886</h4>
        </div>
      </div>
      <hr />
      <div className='app__contact-description'>
        <p className='paragraph-1'>Are you looking for a talented and motivated Junior Frontend Developer to join your team? Look no further! As a passionate frontend developer with a solid foundation in HTML, CSS, and JavaScript, I am eager to contribute my skills to your organization. I have hands-on experience in developing user-friendly and responsive web applications, with a keen eye for detail and a commitment to writing clean and maintainable code. I am well-versed in modern frontend frameworks such as React and Vue, and have a strong understanding of UI/UX principles. With a strong work ethic, excellent communication skills, and a willingness to learn and grow, I am confident that I would be a valuable addition to your team. Contact me today to discuss how I can contribute to your organization's success as a Junior Frontend Developer!</p>
      </div>
    </div>
  )
}

export default contact_me