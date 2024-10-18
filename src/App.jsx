import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import SobreMi from './componentes/SobreMi/SobreMi'
import Conocimientos from './componentes/Conocimientos/Conocimientos'
import Proyectos from './componentes/Proyectos/Proyectos'
import Contacto from './componentes/Contacto/Contacto'
import { useState } from 'react'
import Home from './componentes/Home/Home'

function App() {
  
  const [theme, setTheme] = useState('dark');

  return (
    <div>
      <Header
        theme = {theme}
        setTheme = {setTheme} 
      />
      <div className='App'>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/conocimientos" element={<Conocimientos />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
