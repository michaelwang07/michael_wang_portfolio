import React from 'react'
import './about_me.css'
import graduation from '../../assets/graduation2.jpg'

const about_me = () => {
  return (
    <div className='app__about_me'>
      <div className='app__about_me-upper'>
        <p className='paragraph-2'>
        As a passionate and dedicated individual, I embarked on my journey in software engineering after graduating high school. Despite facing numerous challenges along the way, such as navigating the complex process of getting a degree without any mentors to guide me, I persevered. I graduated in June of 2022 with a Computer Science degree. After self studying and equipped with a strong foundation in software engineering, I am eager to contribute my skills and dedication to a rewarding career in the tech industry.  
        </p>
      </div>
      <hr />
      <div className='app__about_me-lower'>
        <div className='app__about_me-lower_graduation'>
          <img src={graduation} alt="graduation" />
        </div>
        <p className='paragraph-2'>
        My Journey in Software Engineering
        <br /><br />
Hello! My name is Michael Wang, and I am a software engineer. My journey in software engineering started after graduating from high school, when I realized that I wanted to pursue a career in the tech industry. Being passionate about video games and computers since I was a kid, I knew that working with technology was my calling. I decided to take the first steps towards my dream and enrolled in community college.
<br /><br />
The process of getting a degree in software engineering was not easy, and I faced numerous challenges along the way. One of the initial obstacles was not having any mentors and having to figure everything out on my own. I remember taking the wrong classes in my first semester, but after sitting down with a counselor, I gained a better understanding of the process and charted a roadmap for my academic journey.
<br /><br />
One of the most challenging experiences was getting into my first computer science class, which was an introductory course in C++. The class was in high demand, and there were limited seats available. I had to wait on a long waitlist along with many other students who wanted to enroll in the same class. The classroom was packed, with students sitting on the floor and along the edges of the room, making it difficult to move around. The tension was high during the first two weeks as we waited to see if we would be allowed into the class. The instructor encouraged students to drop out if they were unsure about attending to make room for those who were truly committed.
<br /><br />
Despite the challenges, I was one of the 10 students from the waitlist who were eventually enrolled in the class. However, the course proved to be one of the most difficult I had ever taken, even more challenging than Calculus. I struggled and eventually withdrew from the class to avoid failing. However, I didn't give up. In the next semester, I took the same course again, went through the same process, and this time, I passed with an A. This experience taught me the value of perseverance and determination.
<br /><br />
Throughout my college years, I encountered many tough classes, with one in C programming language being the hardest. The final project for that class was to design a file system in Linux using C, which required many sleepless nights of hard work with my group. It was a challenging experience, but I managed to pass the class with a B, despite the low passing ratio of less than 50%. In June 2023, I finally graduated and earned my degree, a moment that made my parents and entire family proud.
<br /><br />
After graduating, I took some time off to relax, travel, and have fun, as I had worked multiple part-time jobs to support myself through college. During this time, I reflected on my goals and realized that it was time for me to pursue a career as a software engineer. I am excited about the opportunities ahead and eager to continue my journey in the tech industry, using my skills and passion to make a meaningful impact.
<br /><br />
Thank you for taking the time to learn about my story in software engineering. I am ready for the next chapter of my career and excited to see where this journey takes me.
        </p>
      </div>
    </div>
  )
}

export default about_me