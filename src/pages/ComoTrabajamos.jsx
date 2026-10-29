
import { Link } from 'react-router-dom'

import {
  ClipboardList,
  Building2,
  GraduationCap,
  MessagesSquare,
  Handshake,
  HeartHandshake,
  ChartNoAxesCombined,
  ArrowRight,
  CheckCircle2,
  Target,
} from 'lucide-react'

export default function ComoTrabajamos() {
  const etapas = [
    {
      numero: '01',
      icono: ClipboardList,
      titulo: 'Diagnóstico de los jóvenes',
      descripcion:
        'El primer paso consiste en conocer a cada joven: su formación, intereses, conocimientos, habilidades, expectativas laborales y dificultades al buscar empleo. También se considera su manejo de herramientas digitales. Esta información permite identificar sus fortalezas y los aspectos que necesita desarrollar.',
      objetivo:
        'Comprender el punto de partida de cada participante.',
    },
    {
      numero: '02',
      icono: Building2,
      titulo: 'Identificación de necesidades empresariales',
      descripcion:
        'Buscamos conocer qué perfiles necesitan las empresas, cuáles son los conocimientos técnicos y las competencias que valoran, y qué requisitos consideran importantes al incorporar nuevos colaboradores.',
      objetivo:
        'Relacionar la formación con las demandas del mundo laboral.',
    },
    {
      numero: '03',
      icono: GraduationCap,
      titulo: 'Capacitación personalizada',
      descripcion:
        'A partir del diagnóstico de cada joven y de las necesidades identificadas en las empresas, proponemos adaptar las capacitaciones para fortalecer competencias laborales y conocimientos tecnológicos, como programación e inteligencia artificial. También contemplamos herramientas prácticas para la búsqueda de empleo, como el armado del CV, la preparación para entrevistas y el conocimiento de los derechos laborales.',
      objetivo:
        'Desarrollar competencias y herramientas acordes con cada perfil y las necesidades del mercado laboral.',
    },
    {
      numero: '04',
      icono: MessagesSquare,
      titulo: 'Simulación de entrevistas y devolución',
      descripcion:
        'Los jóvenes pueden practicar situaciones similares a las que encontrarán en un proceso de selección. A través de entrevistas simuladas y una devolución individual, se busca trabajar aspectos como la presentación personal, la claridad al responder, la comunicación y la seguridad.',
      objetivo:
        'Fortalecer la preparación y la confianza para las entrevistas.',
    },
    {
      numero: '05',
      icono: Handshake,
      titulo: 'Vinculación con oportunidades laborales',
      descripcion:
        'Se busca conectar a los jóvenes con empresas y oportunidades compatibles con sus habilidades, intereses y preparación. La vinculación se plantea teniendo en cuenta también las características de cada puesto, y no solamente la disponibilidad de una vacante.',
      objetivo:
        'Facilitar el encuentro entre talento joven y empleadores.',
    },
    {
      numero: '06',
      icono: HeartHandshake,
      titulo: 'Seguimiento durante la inserción',
      descripcion:
        'El acompañamiento continúa durante los primeros meses de la experiencia laboral. Se propone mantener contacto para conocer cómo avanza la adaptación al puesto, detectar posibles dificultades y contribuir a prevenir el abandono del empleo.',
      objetivo:
        'Favorecer la adaptación y la continuidad en el empleo.',
    },
    {
      numero: '07',
      icono: ChartNoAxesCombined,
      titulo: 'Medición y evaluación de resultados',
      descripcion:
        'Finalmente, se plantea analizar indicadores como la participación en entrevistas, las inserciones laborales logradas y la permanencia en los puestos de trabajo. Esta información permitiría evaluar los resultados y realizar ajustes para mejorar continuamente la propuesta.',
      objetivo:
        'Evaluar los avances y promover la mejora continua.',
    },
  ]

  return (
    <main className="min-w-0 bg-white">

      {/* PRESENTACIÓN */}
      <section className="bg-gradient-to-br from-[#E5F3FA] via-white to-[#FDECE9]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-20">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#ED6050] sm:mb-4 sm:text-base sm:tracking-[0.2em]">
            Nuestra metodología
          </p>

          <h1 className="max-w-4xl text-[clamp(1.65rem,7vw,2.25rem)] font-extrabold leading-[1.2] tracking-tight text-[#267FA9] md:text-5xl">
            Un camino hacia la
            <span className="text-[#ED6050]">
              {' '}inserción laboral sostenida.
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base md:mt-6 md:text-lg">
            En Red Primer Empleo proponemos un sistema
            que integra la orientación, la capacitación,
            la vinculación con empresas y el acompañamiento
            posterior a la inserción laboral.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            Nuestra propuesta busca que los jóvenes no
            solamente accedan a una oportunidad de trabajo,
            sino que también cuenten con herramientas
            para desarrollarse y sostener su trayectoria laboral.
          </p>

          <div className="mt-6 flex max-w-full items-start gap-2 rounded-xl bg-white px-3 py-3 text-[#267FA9] shadow-sm sm:mt-8 sm:inline-flex sm:items-center sm:gap-3 sm:px-5">
            <Target className="mt-0.5 h-5 w-5 shrink-0 sm:mt-0 sm:h-6 sm:w-6" />

            <span className="min-w-0 text-xs font-semibold leading-relaxed sm:text-base">
              Sistema Integral de Inserción y Seguimiento Laboral
            </span>
          </div>

        </div>
      </section>

      {/* INTRODUCCIÓN A LAS ETAPAS */}
      <section className="mx-auto max-w-7xl px-5 pb-6 pt-12 sm:px-6 md:pb-8 md:pt-16">

        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ED6050] sm:mb-3 sm:text-base">
          Nuestro proceso
        </p>

        <h2 className="text-2xl font-extrabold leading-tight text-[#267FA9] sm:text-3xl md:text-4xl">
          Siete etapas que se complementan
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
          Cada etapa cumple una función dentro del recorrido.
          Comenzamos conociendo las necesidades de los jóvenes
          y las empresas, continuamos con la preparación
          y la vinculación, y finalizamos con el seguimiento
          y la evaluación de resultados.
        </p>

      </section>

      {/* RECORRIDO DE LAS SIETE ETAPAS */}
      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-6 md:pb-20">

        <div className="relative space-y-4 md:space-y-6">

          {etapas.map(
            ({ numero, icono: Icono, titulo, descripcion, objetivo }) => (
              <article
                key={numero}
                className="grid min-w-0 gap-4 rounded-2xl border border-[#D4EAF5] bg-white p-5 shadow-sm transition duration-300 hover:shadow-lg md:grid-cols-[100px_1fr] md:gap-6 md:p-8"
              >

                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4">
                  <span className="text-3xl font-extrabold text-[#ED6050] md:text-4xl">
                    {numero}
                  </span>

                  <div className="rounded-xl bg-[#E5F3FA] p-2.5 text-[#267FA9] md:p-3">
                    <Icono className="h-6 w-6 md:h-[29px] md:w-[29px]" />
                  </div>
                </div>

                <div className="min-w-0">
                  <h3 className="mb-3 text-xl font-bold leading-snug text-[#267FA9] md:text-2xl">
                    {titulo}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {descripcion}
                  </p>

                  <div className="mt-4 flex items-start gap-2 rounded-xl bg-[#F5FBFE] p-3 sm:gap-3 md:mt-5 md:p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ED6050]" />

                    <p className="min-w-0 text-sm leading-relaxed text-slate-700">
                      <span className="font-bold">
                        Objetivo:
                      </span>{' '}
                      {objetivo}
                    </p>
                  </div>
                </div>

              </article>
            )
          )}

        </div>
      </section>

      {/* CIERRE */}
      <section className="bg-[#E5F3FA]">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-12 sm:px-6 md:gap-10 md:py-16 lg:grid-cols-2">

          <div className="min-w-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ED6050] sm:mb-3 sm:text-base">
              Nuestro compromiso
            </p>

            <h2 className="mb-4 text-2xl font-extrabold leading-tight text-[#267FA9] sm:text-3xl md:mb-5 md:text-4xl">
              El acompañamiento no termina al conseguir empleo
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Una de las ideas centrales de RPE es que
              la inserción laboral no debe considerarse
              un hecho aislado. La adaptación al puesto,
              el aprendizaje y la continuidad también
              forman parte del proceso.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Por eso, nuestra propuesta incorpora
              seguimiento y evaluación, con la intención
              de reconocer dificultades, mejorar las
              intervenciones y contribuir a experiencias
              laborales más sostenibles.
            </p>
          </div>

          <div className="min-w-0 rounded-2xl bg-[#185A7A] p-5 text-white shadow-lg sm:p-7 md:p-10">

            <HeartHandshake className="mb-4 h-8 w-8 text-[#A9E1F7] md:mb-5 md:h-10 md:w-10" />

            <h3 className="mb-3 text-xl font-bold leading-snug md:mb-4 md:text-2xl">
              Capacitar, conectar y acompañar
            </h3>

            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              Trabajamos sobre tres aspectos que se
              complementan: la preparación para el empleo,
              el acercamiento a las oportunidades y el
              acompañamiento durante la inserción laboral.
            </p>

            <Link
              to="/capacitaciones"
              className="mt-6 inline-flex max-w-full items-center justify-center gap-2 rounded-lg bg-[#ED6050] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#d94d3e] sm:mt-7 sm:px-5 sm:text-base"
            >
              <span>Conocé nuestras capacitaciones</span>
              <ArrowRight className="h-[18px] w-[18px] shrink-0 sm:h-[19px] sm:w-[19px]" />
            </Link>

          </div>

        </div>
      </section>

    </main>
  )
}
