import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import About from './components/about/About.tsx'
import Media from './components/media/Media.tsx'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/media" element={<Media/>}/>
      </Routes>

      <footer className="py-8 px-5 bg-darker-spirit text-center flex w-full">
        <div className="text-lg w-[33%] text-left">Copyright © 2025 EE</div>
        <div className="text-lg w-[33%]">erikenriquez34@gmail.com</div>
      </footer>
    </Router>
  )
}

export default App
