import React from 'react'
import Navbar from './components/navbar/navbar'
import About from './components/about/About'
import About_Me from './components/about_me/about_me'

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <About_Me />
    </div>
  )
}

export default App