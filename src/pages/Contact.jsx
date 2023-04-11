import React from 'react'
import '../App.css'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/Footer/footer'
import Title from '../components/title/title'
import Contact_Me from '../components/contact_me/contact_me'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Title title="Contact"/>
      <Contact_Me />
      <Footer />
      
    </div>
  )
}

export default Contact