
import {
  Users,
  Building2,
  BriefcaseBusiness,
  SearchCheck,
  MessagesSquare,
  Handshake,
  ArrowRight,
  CheckCircle2,
  Target,
} from 'lucide-react'

export default function Oportunidades() {
  const beneficiosJovenes = [
    'Identificar intereses, conocimientos y habilidades.',
    'Conocer oportunidades acordes con su perfil.',
    'Prepararse para participar en procesos de selección.',
    'Recibir orientación durante la búsqueda laboral.',
  ]

  const beneficiosEmpresas = [
    'Identificar perfiles de jóvenes en formación.',
    'Comunicar las habilidades requeridas para distintos puestos.',
    'Participar en procesos de vinculación laboral.',
    'Contribuir a generar oportunidades de primer empleo.',
  ]

  const etapas = [
    {
      numero: '01',
      icono: SearchCheck,
      titulo: 'Conocer los perfiles',
      descripcion:
        'Identificar las habilidades, intereses y conocimientos de los jóvenes, junto con las necesidades de las empresas.',
    },
    {
      numero: '02',
      icono: MessagesSquare,
      titulo: 'Preparar el encuentro',
      descripcion:
        'Brindar orientación para presentar el perfil laboral y participar con mayor seguridad en entrevistas y procesos de selección.',
    },
    {
      numero: '03',
      icono: Handshake,
      titulo: 'Generar conexiones',
      descripcion:
        'Favorecer el acercamiento entre jóvenes y empleadores, buscando oportunidades acordes con las capacidades y los requisitos del puesto.',
    },
  ]

  return (
    <main className="min-w-0 overflow-x-clip bg-white">

      {/* PRESENTACIÓN */}
      <section className="bg-gradient-to-br from-[#E5F3FA] via-white to-[#FDECE9]">
        <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 py-10 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-10 lg:py-20">

          <div className="min-w-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#ED6050] sm:mb-4 sm:text-base sm:tracking-[0.2em]">
              Red Primer Empleo
            </p>

            <h1 className="text-[clamp(1.65rem,7vw,2.25rem)] font-extrabold leading-[1.2] tracking-tight text-[#267FA9] md:text-5xl">
              Conectamos talento con
              <span className="text-[#ED6050]">
                {' '}oportunidades.
              </span>
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base md:mt-6 md:text-lg">
              El acceso al primer empleo representa un desafío
              para muchos jóvenes que buscan comenzar su
              trayectoria laboral. En RPE proponemos acercar
              a quienes se están preparando para trabajar
              con las empresas que necesitan incorporar talento.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
              Buscamos que la formación y las oportunidades
              laborales estén conectadas, teniendo en cuenta
              tanto las capacidades de cada joven como
              las necesidades de los empleadores.
            </p>
          </div>

          {/* ILUSTRACIÓN JÓVENES Y EMPRESAS */}
          <div className="min-w-0 rounded-2xl bg-white p-3 shadow-xl sm:rounded-3xl sm:p-6 lg:p-8">

            <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 sm:gap-4">

              <div className="flex min-w-0 flex-col items-center rounded-xl bg-[#E5F3FA] px-1 py-4 text-center sm:rounded-2xl sm:p-5">
                <Users className="mb-2 h-7 w-7 text-[#267FA9] sm:mb-3 sm:h-[38px] sm:w-[38px]" />
                <span className="text-xs font-bold text-[#267FA9] sm:text-base">
                  Jóvenes
                </span>
              </div>

              <div className="flex shrink-0 items-center justify-center rounded-full bg-[#ED6050] p-2 text-white sm:p-3">
                <Handshake className="h-5 w-5 sm:h-[26px] sm:w-[26px]" />
              </div>

              <div className="flex min-w-0 flex-col items-center rounded-xl bg-[#E5F3FA] px-1 py-4 text-center sm:rounded-2xl sm:p-5">
                <Building2 className="mb-2 h-7 w-7 text-[#267FA9] sm:mb-3 sm:h-[38px] sm:w-[38px]" />
                <span className="text-xs font-bold text-[#267FA9] sm:text-base">
                  Empresas
                </span>
              </div>

            </div>

            <div className="mt-5 text-center sm:mt-6">
              <p className="text-base font-bold text-[#267FA9] sm:text-xl">
                Un puente hacia el primer empleo
              </p>

              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Vinculación basada en habilidades,
                necesidades y posibilidades de desarrollo.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* JÓVENES Y EMPRESAS */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-16">

        <div className="mb-8 max-w-3xl md:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ED6050] sm:mb-3 sm:text-base">
            Nuestra propuesta
          </p>

          <h2 className="text-2xl font-extrabold leading-tight text-[#267FA9] sm:text-3xl md:text-4xl">
            Dos partes, un mismo objetivo
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            Para facilitar el acceso al primer empleo,
            consideramos importante trabajar tanto con
            los jóvenes que buscan oportunidades como
            con las organizaciones que pueden ofrecerlas.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-8">

          {/* PARA JÓVENES */}
          <article className="min-w-0 rounded-2xl border border-[#D4EAF5] bg-[#F5FBFE] p-5 sm:p-6 md:p-8">

            <div className="mb-4 inline-flex rounded-xl bg-[#E5F3FA] p-3 text-[#267FA9] md:mb-5 md:p-4">
              <Users className="h-7 w-7 md:h-8 md:w-8" />
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#267FA9] md:mb-4 md:text-2xl">
              Para jóvenes
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base md:mb-6">
              Queremos que los jóvenes puedan reconocer
              sus capacidades y contar con herramientas
              para acercarse al mundo laboral, incluso
              cuando todavía no tienen experiencia previa.
            </p>

            <ul className="space-y-3 md:space-y-4">
              {beneficiosJovenes.map((beneficio) => (
                <li
                  key={beneficio}
                  className="flex items-start gap-2 text-sm leading-relaxed text-slate-700 sm:gap-3 sm:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ED6050] sm:h-5 sm:w-5" />
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* PARA EMPRESAS */}
          <article className="min-w-0 rounded-2xl border border-[#D4EAF5] bg-white p-5 shadow-sm sm:p-6 md:p-8">

            <div className="mb-4 inline-flex rounded-xl bg-[#E5F3FA] p-3 text-[#267FA9] md:mb-5 md:p-4">
              <Building2 className="h-7 w-7 md:h-8 md:w-8" />
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#267FA9] md:mb-4 md:text-2xl">
              Para empresas
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base md:mb-6">
              Las empresas también cumplen un papel
              importante en la inserción laboral.
              Conocer sus necesidades permite orientar
              mejor la capacitación y favorecer
              la identificación de perfiles adecuados.
            </p>

            <ul className="space-y-3 md:space-y-4">
              {beneficiosEmpresas.map((beneficio) => (
                <li
                  key={beneficio}
                  className="flex items-start gap-2 text-sm leading-relaxed text-slate-700 sm:gap-3 sm:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ED6050] sm:h-5 sm:w-5" />
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>
          </article>

        </div>
      </section>

      {/* RECORRIDO DE VINCULACIÓN */}
      <section className="bg-[#E5F3FA]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-16">

          <div className="mb-8 max-w-3xl md:mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ED6050] sm:mb-3 sm:text-base">
              El camino hacia el empleo
            </p>

            <h2 className="text-2xl font-extrabold leading-tight text-[#267FA9] sm:text-3xl md:text-4xl">
              ¿Cómo generamos oportunidades?
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
              La vinculación laboral requiere conocer
              a las personas, comprender las necesidades
              de las empresas y facilitar espacios
              de encuentro entre ambas partes.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {etapas.map(
              ({ numero, icono: Icono, titulo, descripcion }) => (
                <article
                  key={numero}
                  className="min-w-0 rounded-2xl bg-white p-5 shadow-sm md:p-7"
                >
                  <div className="mb-4 flex items-center justify-between md:mb-5">
                    <div className="rounded-xl bg-[#E5F3FA] p-3 text-[#267FA9]">
                      <Icono className="h-6 w-6 md:h-7 md:w-7" />
                    </div>

                    <span className="text-2xl font-extrabold text-[#ED6050] md:text-3xl">
                      {numero}
                    </span>
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-[#267FA9] md:mb-3 md:text-xl">
                    {titulo}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {descripcion}
                  </p>
                </article>
              )
            )}
          </div>

        </div>
      </section>

      {/* CIERRE */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-16">
        <div className="grid min-w-0 items-center gap-6 rounded-3xl bg-[#185A7A] p-5 text-white sm:p-8 md:gap-10 md:p-12 lg:grid-cols-2">

          <div className="min-w-0">
            <Target className="mb-4 h-8 w-8 text-[#A9E1F7] md:mb-5 md:h-[38px] md:w-[38px]" />

            <h2 className="mb-4 text-2xl font-extrabold leading-tight md:mb-5 md:text-3xl">
              Nuestro objetivo es la inserción laboral sostenida
            </h2>

            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              Conseguir una oportunidad de empleo es
              importante, pero también lo es contar
              con herramientas para adaptarse, aprender
              y desarrollarse dentro de una organización.
            </p>
          </div>

          <div className="min-w-0 rounded-2xl bg-white/10 p-4 sm:p-6 md:p-7">
            <BriefcaseBusiness className="mb-4 h-7 w-7 text-[#A9E1F7] md:h-8 md:w-8" />

            <h3 className="mb-3 text-lg font-bold md:text-xl">
              Más allá de la búsqueda laboral
            </h3>

            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              Por eso, la propuesta de RPE contempla
              la orientación, la vinculación y el
              seguimiento durante los primeros meses
              de inserción, buscando fortalecer
              la continuidad laboral.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#A9E1F7] sm:text-base md:mt-6">
              <span>Capacitación + vinculación + acompañamiento</span>
              <ArrowRight size={18} className="shrink-0" />
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
