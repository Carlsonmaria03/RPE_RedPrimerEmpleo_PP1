
import {
  Target,
  Eye,
  HeartHandshake,
  Users,
  BookOpen,
  Scale,
  HandHeart,
} from 'lucide-react'

export default function Nosotros() {
  const valores = [
    {
      icono: HeartHandshake,
      titulo: 'Compromiso',
      descripcion:
        'Trabajamos para generar oportunidades reales de inserción laboral.',
    },
    {
      icono: HandHeart,
      titulo: 'Acompañamiento',
      descripcion:
        'Brindamos orientación y apoyo durante cada etapa del proceso.',
    },
    {
      icono: Users,
      titulo: 'Inclusión',
      descripcion:
        'Promovemos espacios donde cada joven pueda desarrollar su potencial.',
    },
    {
      icono: BookOpen,
      titulo: 'Aprendizaje continuo',
      descripcion:
        'Impulsamos la actualización de conocimientos y habilidades.',
    },
    {
      icono: Scale,
      titulo: 'Igualdad de oportunidades',
      descripcion:
        'Buscamos reducir las barreras de acceso al primer empleo.',
    },
  ]

  return (
    <section
      id="nosotros"
      className="scroll-mt-24 bg-white py-12 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* PRESENTACIÓN */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">

          <span className="mb-4 inline-block rounded-full bg-[#E5F3FA] px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-[#267FA9] sm:px-5 sm:text-sm sm:tracking-wider">
            Conocé nuestra organización
          </span>

          <h2 className="mb-4 text-2xl font-extrabold leading-tight text-[#267FA9] sm:text-3xl md:mb-6 md:text-5xl">
            ¿Quiénes somos?
          </h2>

          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-[#ED6050] md:mb-7 md:h-1.5 md:w-20" />

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
            En Red Primer Empleo acompañamos a jóvenes de 18 a 25 años
            en su camino hacia el mundo laboral. Brindamos orientación,
            capacitación y herramientas para facilitar su primera
            experiencia de trabajo, con especial atención a las
            oportunidades que ofrecen las nuevas tecnologías.
          </p>
        </div>

        {/* MISIÓN Y VISIÓN */}
        <div className="mb-12 grid gap-5 md:mb-20 md:grid-cols-2 md:gap-8">

          {/* MISIÓN */}
          <article className="rounded-2xl border border-[#D4EAF5] bg-[#E5F3FA] p-5 shadow-sm sm:p-7 md:p-9">

            <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-[#267FA9] md:mb-6 md:p-4">
              <Target className="h-7 w-7 md:h-[34px] md:w-[34px]" />
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#267FA9] sm:text-2xl md:mb-4 md:text-3xl">
              Nuestra misión
            </h3>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base md:text-lg">
              Acompañar y orientar a jóvenes de 18 a 25 años en el
              acceso a su primer empleo, brindándoles herramientas,
              capacitación y seguimiento para fortalecer sus
              oportunidades de inserción laboral, especialmente en
              áreas vinculadas con la programación y la inteligencia
              artificial.
            </p>
          </article>

          {/* VISIÓN */}
          <article className="rounded-2xl border border-[#F8D8D3] bg-[#FFF2EF] p-5 shadow-sm sm:p-7 md:p-9">

            <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-[#ED6050] md:mb-6 md:p-4">
              <Eye className="h-7 w-7 md:h-[34px] md:w-[34px]" />
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#267FA9] sm:text-2xl md:mb-4 md:text-3xl">
              Nuestra visión
            </h3>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base md:text-lg">
              Ser una organización reconocida por facilitar las
              primeras experiencias laborales de los jóvenes,
              promoviendo la inclusión, el desarrollo profesional
              y el fortalecimiento de los vínculos con las empresas.
            </p>
          </article>
        </div>

        {/* VALORES */}
        <div className="text-center">

          <h3 className="mb-3 text-2xl font-extrabold text-[#267FA9] sm:text-3xl md:mb-4 md:text-4xl">
            Nuestros valores
          </h3>

          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:mb-12 md:text-lg">
            Son los principios que orientan nuestra forma de trabajar
            y de acompañar a cada joven.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">

            {valores.map(
              ({ icono: Icono, titulo, descripcion }) => (
                <article
                  key={titulo}
                  className="rounded-2xl border border-slate-100 bg-white p-5 text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-7"
                >

                  <div className="mb-3 inline-flex rounded-xl bg-[#E5F3FA] p-3 text-[#267FA9] md:mb-5 md:p-4">
                    <Icono className="h-6 w-6 md:h-7 md:w-7" />
                  </div>

                  <h4 className="mb-2 text-lg font-bold text-[#267FA9] md:mb-3 md:text-xl">
                    {titulo}
                  </h4>

                  <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                    {descripcion}
                  </p>

                </article>
              )
            )}

          </div>
        </div>

      </div>
    </section>
  )
}
