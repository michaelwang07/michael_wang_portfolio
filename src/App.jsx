import './App.css'
import Enthusiasm from './components/enthusiasm/enthusiasm'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/navbar'
import Websites from './components/websites/websites'

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Websites />
      <Enthusiasm />
    </div>
  )
}

export default App
