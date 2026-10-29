
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
} from 'lucide-react'

import { Link } from 'react-router-dom'

export default function Hero() {
  const tarjetas = [
    {
      icono: GraduationCap,
      titulo: 'Capacitación',
      ruta: '/capacitaciones',
      descripcion:
        'Formación en nuevas tecnologías y habilidades laborales.',
    },
    {
      icono: BriefcaseBusiness,
      titulo: 'Oportunidades',
      ruta: '/oportunidades',
      descripcion:
        'Vinculación con empresas que buscan nuevos talentos.',
    },
    {
      icono: Handshake,
      titulo: 'Acompañamiento',
      ruta: '/como-trabajamos',
      descripcion:
        'Orientación y seguimiento durante la inserción laboral.',
    },
  ]

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-[#E5F3FA] via-white to-[#FDECE9]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 sm:px-6 md:py-16 lg:min-h-[600px] lg:grid-cols-2 lg:gap-12 lg:py-20">

        {/* Presentación principal */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#ED6050] sm:mb-5 sm:text-base sm:tracking-[0.2em]">
            Red Primer Empleo
          </p>

          <h1 className="mb-4 text-[clamp(1.65rem,7vw,2.25rem)] font-extrabold leading-[1.2] tracking-tight text-[#267FA9] md:mb-6 md:text-5xl lg:text-6xl">
            De la capacitación a la
            <span className="text-[#ED6050]">
              {' '}inserción laboral sostenida.
            </span>
          </h1>

          <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base md:mb-8 md:text-lg">
            Acompañamos a jóvenes de 18 a 25 años en su camino
            hacia el primer empleo, brindándoles orientación,
            capacitación y herramientas para desarrollarse
            profesionalmente.
          </p>

          <a
            href="#nosotros"
            className="inline-flex max-w-full items-center justify-center gap-2 rounded-lg bg-[#ED6050] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#d94d3e] sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
          >
            Conocé nuestro proyecto
            <ArrowRight size={18} className="shrink-0" />
          </a>
        </div>

        {/* Tarjetas institucionales */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {tarjetas.map(
            ({ icono: Icono, titulo, descripcion, ruta }, indice) => {
              const contenido = (
                <>
                  <div className="mb-3 inline-flex rounded-xl bg-[#E5F3FA] p-3 text-[#267FA9] sm:mb-5 sm:p-4">
                    <Icono size={26} />
                  </div>

                  <h2 className="mb-2 text-lg font-bold text-[#267FA9] sm:text-xl">
                    {titulo}
                  </h2>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {descripcion}
                  </p>

                  {ruta && (
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#ED6050] sm:mt-5">
                      Conocer más
                      <ArrowRight size={17} />
                    </span>
                  )}
                </>
              )

              const estilos = `rounded-2xl border border-[#D4EAF5] bg-white p-5 shadow-lg sm:p-7 ${
                indice === 2 ? 'sm:col-span-2' : ''
              } ${
                ruta
                  ? 'cursor-pointer transition duration-300 hover:-translate-y-1 hover:border-[#ED6050] hover:shadow-xl'
                  : ''
              }`

              if (ruta) {
                return (
                  <Link
                    key={titulo}
                    to={ruta}
                    className={estilos}
                  >
                    {contenido}
                  </Link>
                )
              }

              return (
                <div key={titulo} className={estilos}>
                  {contenido}
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}
