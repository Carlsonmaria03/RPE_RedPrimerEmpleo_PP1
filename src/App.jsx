
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Inicio from './pages/Inicio'
import Capacitaciones from './pages/Capacitaciones'
import Oportunidades from './pages/Oportunidades'
import ComoTrabajamos from './pages/ComoTrabajamos'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="flex min-h-screen flex-col">

        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Inicio />} />

            <Route
              path="/capacitaciones"
              element={<Capacitaciones />}
            />

            <Route
              path="/oportunidades"
              element={<Oportunidades />}
            />

            <Route
              path="/como-trabajamos"
              element={<ComoTrabajamos />}
            />

            <Route
              path="/contacto"
              element={<Contacto />}
            />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  )
}
