import './App.css'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/navbar'
import Websites from './components/websites/websites'

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Websites />
    </div>
  )
}

export default App
