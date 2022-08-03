import '../styles/App.css'
import { Routes, Route, Link } from 'react-router-dom'

//pages
import Home from './pages/Home'
import Services from './pages/Services'
import Us from './pages/Us'
import Contact from './pages/Contact'

//components
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='App container'>
      <div className="container">
        <Navbar/>
      </div>

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/servicios' element={ <Services /> } />
          <Route path='/nosotros' element={ <Us /> } />
          <Route path='/contacto' element={ <Contact /> } />
        </Routes>

    </div>
  )
}

export default App
