import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Livros from './pages/Livros'
import Sobre from './pages/Sobre'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Livros/:id' element={<Livros/>} />
          <Route path='/Sobre' element={<Sobre/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
