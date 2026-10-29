
import { Link } from 'react-router-dom'
import { ArrowUp, GraduationCap } from 'lucide-react'

export default function Footer() {
  const anio = new Date().getFullYear()

  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="bg-[#185A7A] text-white">

      {/* CONTENIDO PRINCIPAL */}
      <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-7 px-5 py-7 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:py-8">

        {/* IDENTIDAD - SOLO COMPUTADORAS */}
        <div className="hidden lg:block">
          <h2 className="text-2xl font-extrabold">
            RPE <span className="text-[#ED6050]">|</span>
          </h2>

          <p className="mt-2 font-semibold">
            Red Primer Empleo
          </p>

          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            Capacitación, oportunidades y acompañamiento
            para jóvenes en su camino hacia el primer empleo.
          </p>
        </div>

        {/* NAVEGACIÓN - SOLO COMPUTADORAS */}
        <div className="hidden lg:block">
          <h3 className="mb-3 font-bold">
            Explorá nuestra web
          </h3>

          <ul className="space-y-2 text-sm text-slate-200">
            <li>
              <Link to="/" className="hover:text-[#FF9A8D]">
                Inicio
              </Link>
            </li>

            <li>
              <Link to="/#nosotros" className="hover:text-[#FF9A8D]">
                Quiénes somos
              </Link>
            </li>

            <li>
              <Link to="/capacitaciones" className="hover:text-[#FF9A8D]">
                Capacitaciones
              </Link>
            </li>

            <li>
              <Link to="/oportunidades" className="hover:text-[#FF9A8D]">
                Oportunidades
              </Link>
            </li>

            <li>
              <Link to="/como-trabajamos" className="hover:text-[#FF9A8D]">
                Cómo trabajamos
              </Link>
            </li>

            <li>
              <Link to="/contacto" className="hover:text-[#FF9A8D]">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* INFORMACIÓN ACADÉMICA */}
        <div className="min-w-0">
          <h3 className="mb-3 text-sm font-bold sm:text-base">
            Nuestro proyecto
          </h3>

          <div className="flex items-start gap-2">
            <GraduationCap
              size={20}
              className="mt-0.5 shrink-0 text-[#A9E1F7]"
            />

            <div className="min-w-0 text-sm leading-relaxed text-slate-200">
              <p className="font-semibold text-white">
                IFTS N.º 20
              </p>

              <p>
                Tecnicatura Superior en Recursos Humanos
              </p>

              <p className="mt-2">
                Práctica Profesionalizante I
              </p>

              <p className="mt-2 text-[#A9E1F7]">
                Comisión 2 · 2026
              </p>
            </div>
          </div>
        </div>

        {/* INTEGRANTES */}
        <div className="min-w-0">
          <h3 className="mb-3 text-sm font-bold sm:text-base">
            Integrantes
          </h3>

          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-slate-200 sm:grid-cols-1">
            <li>Vanesa Lemos</li>
            <li>Yamila Aquino</li>
            <li>Carolina Mansilla</li>
            <li>Gastón García Rumi</li>
          </ul>
        </div>

      </div>

      {/* FRANJA INFERIOR */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 sm:px-6 md:flex-row md:py-4">

          {/* COPYRIGHT Y CRÉDITOS */}
          <div className="max-w-full text-center md:text-left">

            <p className="text-xs leading-relaxed text-slate-300">
              © {anio} Red Primer Empleo ·
              Proyecto académico IFTS N.º 20 ·
              Todos los derechos reservados.
            </p>

            <div className="mt-2 flex flex-col gap-1 text-[11px] leading-relaxed text-slate-300 sm:flex-row sm:flex-wrap sm:gap-x-2 md:mt-1 md:text-[10px] md:text-slate-400">

              <span>
                Diseño: Carolina Mansilla
              </span>

              <span className="hidden sm:inline">
                ·
              </span>

              <span>
                Desarrollo web: María Cecilia Carlson
              </span>

            </div>
          </div>

          {/* BOTÓN VOLVER ARRIBA */}
          <button
            type="button"
            onClick={volverArriba}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ED6050] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#d94d3e] md:px-3 md:py-2"
          >
            Volver arriba
            <ArrowUp size={15} />
          </button>

        </div>
      </div>

    </footer>
  )
}
