import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
  
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import BookList from './components/BookList'
import CardBook from './components/CardBook'

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Book' element={<BookList/>}/>
            <Route path='/Book/:id' element={<CardBook/>} />
            <Route path='/Sobre' element={<Sobre/>} />
          </Routes>
        </Router>
    </>
  )
}

export default App
