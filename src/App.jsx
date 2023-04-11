import React from 'react'
import Navbar from './components/navbar/navbar'
import About from './components/about/About'
import About_Me from './components/about_me/about_me'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <About_Me />
      <Footer />
    </div>
  )
}

export default App