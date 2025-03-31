
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Zvezda from './pages/Zvezda';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <nav style={{display: 'flex',
           justifyContent: 'space-around', gap: '10px',
            padding: '10px', backgroundColor: 'slategray',
            width: '1400px', margin: '0 auto', position: 'fixed', top: '0'}}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to ="/zvezda">Zvezda</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/zvezda" element={<Zvezda />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
