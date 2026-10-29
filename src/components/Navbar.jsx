
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => {
    setMenuAbierto(false)
  }

  const estiloEnlace = ({ isActive }) =>
    `text-base font-semibold transition-colors hover:text-[#ED6050] ${
      isActive ? 'text-[#ED6050]' : 'text-slate-700'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-6 py-4">

        <div className="flex items-center justify-between gap-5">

          {/* LOGO */}
          <Link
            to="/"
            onClick={cerrarMenu}
            className="text-lg font-bold text-[#267FA9] sm:text-2xl"
          >
            RPE <span className="text-[#ED6050]">|</span>{' '}
            Red Primer Empleo
          </Link>

          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden flex-wrap items-center gap-5 xl:flex">

            <NavLink
              to="/"
              end
              className={estiloEnlace}
            >
              Inicio
            </NavLink>

            <Link
              to="/#nosotros"
              className="text-base font-semibold text-slate-700 transition-colors hover:text-[#ED6050]"
            >
              Nosotros
            </Link>

            <NavLink
              to="/capacitaciones"
              className={estiloEnlace}
            >
              Capacitaciones
            </NavLink>

            <NavLink
              to="/oportunidades"
              className={estiloEnlace}
            >
              Oportunidades
            </NavLink>

            <NavLink
              to="/como-trabajamos"
              className={estiloEnlace}
            >
              Cómo trabajamos
            </NavLink>

            <NavLink
              to="/contacto"
              className={estiloEnlace}
            >
              Contacto
            </NavLink>

          </div>

          {/* BOTÓN DEL MENÚ MÓVIL */}
          <button
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label={
              menuAbierto ? 'Cerrar menú' : 'Abrir menú'
            }
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            className="rounded-lg p-2 text-[#267FA9] transition hover:bg-[#E5F3FA] xl:hidden"
          >
            {menuAbierto ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

        {/* MENÚ DESPLEGABLE */}
        {menuAbierto && (
          <div
            id="menu-movil"
            className="mt-5 flex flex-col gap-5 border-t border-slate-200 pt-5 xl:hidden"
          >

            <NavLink
              to="/"
              end
              onClick={cerrarMenu}
              className={estiloEnlace}
            >
              Inicio
            </NavLink>

            <Link
              to="/#nosotros"
              onClick={cerrarMenu}
              className="text-base font-semibold text-slate-700 hover:text-[#ED6050]"
            >
              Nosotros
            </Link>

            <NavLink
              to="/capacitaciones"
              onClick={cerrarMenu}
              className={estiloEnlace}
            >
              Capacitaciones
            </NavLink>

            <NavLink
              to="/oportunidades"
              onClick={cerrarMenu}
              className={estiloEnlace}
            >
              Oportunidades
            </NavLink>

            <NavLink
              to="/como-trabajamos"
              onClick={cerrarMenu}
              className={estiloEnlace}
            >
              Cómo trabajamos
            </NavLink>

            <NavLink
              to="/contacto"
              onClick={cerrarMenu}
              className={estiloEnlace}
            >
              Contacto
            </NavLink>

          </div>
        )}

      </nav>
    </header>
  )
}
