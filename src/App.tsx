import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
    </Router>
  )
}

export default App
