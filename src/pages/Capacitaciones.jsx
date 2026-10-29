
import {
  Code2,
  BrainCircuit,
  ChartNoAxesCombined,
  MonitorCog,
  FileUser,
  MessagesSquare,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

export default function Capacitaciones() {
  const capacitaciones = [
    {
      icono: Code2,
      titulo: 'Programación',
      descripcion:
        'Introducción a los fundamentos de la programación y al pensamiento lógico para resolver problemas mediante herramientas digitales.',
      contenidos: [
        'Lógica de programación',
        'Resolución de problemas',
        'Introducción al código',
      ],
    },
    {
      icono: BrainCircuit,
      titulo: 'Inteligencia artificial',
      descripcion:
        'Acercamiento a las tecnologías de inteligencia artificial, sus aplicaciones y las posibilidades que ofrecen en diferentes entornos laborales.',
      contenidos: [
        'Conceptos básicos de IA',
        'Herramientas digitales',
        'Uso responsable de la tecnología',
      ],
    },
    {
      icono: ChartNoAxesCombined,
      titulo: 'Ciencia de datos',
      descripcion:
        'Desarrollo de conocimientos iniciales para interpretar información, identificar tendencias y comprender cómo los datos ayudan a tomar decisiones.',
      contenidos: [
        'Organización de información',
        'Análisis e interpretación de datos',
        'Visualización de resultados',
      ],
    },
    {
      icono: MonitorCog,
      titulo: 'Desarrollo de software',
      descripcion:
        'Introducción al proceso de creación de soluciones digitales y al trabajo colaborativo que caracteriza a los equipos tecnológicos.',
      contenidos: [
        'Etapas de desarrollo',
        'Herramientas de trabajo',
        'Proyectos colaborativos',
      ],
    },
    {
      icono: FileUser,
      titulo: 'Armado de CV',
      descripcion:
        'Orientación para reconocer habilidades, organizar experiencias y elaborar un currículum que permita presentar el perfil personal y profesional.',
      contenidos: [
        'Identificación de habilidades',
        'Elaboración del currículum',
        'Presentación del perfil laboral',
      ],
    },
    {
      icono: MessagesSquare,
      titulo: 'Entrevistas laborales',
      descripcion:
        'Preparación para afrontar procesos de selección, fortalecer la comunicación y adquirir mayor seguridad al presentarse ante una empresa.',
      contenidos: [
        'Simulación de entrevistas',
        'Comunicación y presentación',
        'Devoluciones para mejorar',
      ],
    },
  ]

  return (
    <main className="bg-white">

      {/* PRESENTACIÓN */}
      <section className="bg-gradient-to-br from-[#E5F3FA] via-white to-[#FDECE9]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-20">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#ED6050] sm:mb-4 sm:text-base sm:tracking-[0.2em]">
            Red Primer Empleo
          </p>

          <h1 className="max-w-4xl text-[clamp(1.65rem,7vw,2.25rem)] font-extrabold leading-[1.2] tracking-tight text-[#267FA9] md:text-5xl">
            Capacitaciones para construir
            <span className="text-[#ED6050]">
              {' '}nuevas oportunidades.
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base md:mt-6 md:text-lg">
            En RPE entendemos que la formación es una herramienta
            fundamental para acercar a los jóvenes al mundo del trabajo.
            Por eso, nuestro proyecto propone fortalecer conocimientos
            tecnológicos y habilidades necesarias para iniciar
            una trayectoria laboral.
          </p>

          <div className="mt-6 inline-flex max-w-full items-center gap-2 rounded-xl bg-white px-3 py-3 text-[#267FA9] shadow-sm sm:mt-8 sm:gap-3 sm:px-5">
            <GraduationCap className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
            <span className="text-xs font-semibold sm:text-base">
              Orientado a jóvenes de 18 a 25 años
            </span>
          </div>

        </div>
      </section>

      {/* ÁREAS DE CAPACITACIÓN */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-16">

        <div className="mb-8 max-w-3xl md:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ED6050] sm:mb-3 sm:text-base">
            Nuestra propuesta
          </p>

          <h2 className="text-2xl font-extrabold text-[#267FA9] sm:text-3xl md:text-4xl">
            Áreas de formación
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base md:mt-4">
            Combinamos conocimientos vinculados con las nuevas
            tecnologías y herramientas prácticas para la búsqueda
            de empleo. Cada área contribuye a desarrollar
            capacidades útiles para diferentes oportunidades laborales.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-7 lg:grid-cols-3">

          {capacitaciones.map(
            ({ icono: Icono, titulo, descripcion, contenidos }) => (
              <article
                key={titulo}
                className="flex flex-col rounded-2xl border border-[#D4EAF5] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-7"
              >

                <div className="mb-4 inline-flex w-fit rounded-xl bg-[#E5F3FA] p-3 text-[#267FA9] md:mb-5 md:p-4">
                  <Icono className="h-7 w-7 md:h-[30px] md:w-[30px]" />
                </div>

                <h3 className="mb-2 text-lg font-bold text-[#267FA9] md:mb-3 md:text-xl">
                  {titulo}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-slate-600 md:mb-6 md:text-base">
                  {descripcion}
                </p>

                <div className="mt-auto border-t border-slate-100 pt-4 md:pt-5">
                  <p className="mb-3 text-sm font-bold text-slate-700">
                    Contenidos principales
                  </p>

                  <ul className="space-y-3">
                    {contenidos.map((contenido) => (
                      <li
                        key={contenido}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-[#ED6050]"
                        />
                        <span>{contenido}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </article>
            )
          )}

        </div>
      </section>

      {/* CIERRE */}
      <section className="bg-[#E5F3FA]">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-12 sm:px-6 md:gap-10 md:py-16 lg:grid-cols-2">

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ED6050] sm:mb-3 sm:text-base">
              Más que aprender
            </p>

            <h2 className="mb-4 text-2xl font-extrabold leading-tight text-[#267FA9] sm:text-3xl md:mb-5 md:text-4xl">
              De la capacitación al mundo laboral
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Nuestro objetivo no se limita a brindar conocimientos.
              Buscamos que la formación se relacione con las
              necesidades de las empresas y que los jóvenes puedan
              aplicar lo aprendido en situaciones reales de búsqueda
              e inserción laboral.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              La orientación, la preparación para entrevistas, el conocimiento de los derechos laborales y el acompañamiento forman parte de una propuesta que busca que los jóvenes no solo accedan a su primer empleo, sino que también cuenten con herramientas para desenvolverse y sostener su trayectoria laboral.
            </p>
          </div>

          <div className="rounded-2xl bg-[#185A7A] p-5 text-white shadow-lg sm:p-7 md:p-10">

            <GraduationCap
              className="mb-4 h-8 w-8 text-[#A9E1F7] md:mb-5 md:h-10 md:w-10"
            />

            <h3 className="mb-3 text-xl font-bold leading-snug md:mb-4 md:text-2xl">
              Aprender es el primer paso
            </h3>

            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              En RPE creemos que cada joven necesita oportunidades
              para desarrollar su potencial. La capacitación,
              junto con la orientación y el seguimiento,
              puede convertirse en un puente hacia su primer empleo.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#A9E1F7] sm:text-base md:mt-6">
              <span>Capacitar, conectar y acompañar</span>
              <ArrowRight size={19} className="shrink-0" />
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
