
import { useState } from 'react'

import {
  Mail,
  GraduationCap,
  Building2,
  MessageCircle,
  Send,
  Info,
  HeartHandshake,
} from 'lucide-react'

const FORMULARIO_INICIAL = {
  nombre: '',
  email: '',
  tipo: '',
  mensaje: '',
}

export default function Contacto() {
  const [formulario, setFormulario] = useState(FORMULARIO_INICIAL)
  const [estadoEnvio, setEstadoEnvio] = useState('inicial')

  const actualizarCampo = (evento) => {
    const { name, value } = evento.target

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }))

    setEstadoEnvio('inicial')
  }

  const enviarFormulario = async (evento) => {
    evento.preventDefault()

    if (estadoEnvio === 'enviando') return

    setEstadoEnvio('enviando')

    try {
      const respuesta = await fetch(
        'https://formspree.io/f/xaeedlqy',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            nombre: formulario.nombre,
            email: formulario.email,
            tipo: formulario.tipo,
            mensaje: formulario.mensaje,
            _replyto: formulario.email,
            _subject: 'Nueva consulta desde Red Primer Empleo',
          }),
        }
      )

      if (!respuesta.ok) {
        throw new Error('No se pudo enviar la consulta')
      }

      setEstadoEnvio('exito')
      setFormulario({ ...FORMULARIO_INICIAL })
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setEstadoEnvio('error')
    }
  }

  return (
    <main className="min-w-0 bg-white">

      {/* PRESENTACIÓN */}
      <section className="bg-gradient-to-br from-[#E5F3FA] via-white to-[#FDECE9]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-20">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#ED6050] sm:mb-4 sm:text-base sm:tracking-[0.2em]">
            Contacto
          </p>

          <h1 className="max-w-4xl text-[clamp(1.65rem,7vw,2.25rem)] font-extrabold leading-[1.2] tracking-tight text-[#267FA9] md:text-5xl">
            Estamos para
            <span className="text-[#ED6050]">
              {' '}escucharte.
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base md:mt-6 md:text-lg">
            En Red Primer Empleo creemos que las
            oportunidades comienzan con una conversación.
            Si querés conocer nuestra propuesta,
            las capacitaciones o las posibilidades
            de vinculación laboral, este es el espacio
            para acercarnos tu consulta.
          </p>

        </div>
      </section>

      {/* DESTINATARIOS */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-16">

        <div className="mb-8 md:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ED6050] sm:mb-3 sm:text-base">
            Conectemos
          </p>

          <h2 className="text-2xl font-extrabold leading-tight text-[#267FA9] sm:text-3xl md:text-4xl">
            ¿Cómo podemos ayudarte?
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-7">

          {/* JÓVENES */}
          <article className="min-w-0 rounded-2xl border border-[#D4EAF5] bg-[#F5FBFE] p-5 sm:p-6 md:p-8">

            <div className="mb-4 inline-flex rounded-xl bg-[#E5F3FA] p-3 text-[#267FA9] md:mb-5 md:p-4">
              <GraduationCap className="h-7 w-7 md:h-8 md:w-8" />
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#267FA9] md:mb-4 md:text-2xl">
              Soy joven
            </h3>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Si tenés entre 18 y 25 años y querés
              prepararte para tu primer empleo,
              podés consultar sobre nuestra propuesta
              de capacitación, orientación y
              acompañamiento laboral.
            </p>
          </article>

          {/* EMPRESAS */}
          <article className="min-w-0 rounded-2xl border border-[#D4EAF5] bg-white p-5 shadow-sm sm:p-6 md:p-8">

            <div className="mb-4 inline-flex rounded-xl bg-[#E5F3FA] p-3 text-[#267FA9] md:mb-5 md:p-4">
              <Building2 className="h-7 w-7 md:h-8 md:w-8" />
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#267FA9] md:mb-4 md:text-2xl">
              Represento una empresa
            </h3>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Si formás parte de una organización
              interesada en incorporar talento joven,
              podés conocer nuestra propuesta
              de vinculación entre los perfiles
              en formación y las necesidades empresariales.
            </p>
          </article>

        </div>
      </section>

      {/* FORMULARIO */}
      <section className="bg-[#E5F3FA]">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 py-12 sm:px-6 md:gap-10 md:py-16 lg:grid-cols-2">

          {/* TEXTO INFORMATIVO */}
          <div className="min-w-0">

            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ED6050] sm:mb-3 sm:text-base">
              Tu consulta
            </p>

            <h2 className="mb-4 text-2xl font-extrabold leading-tight text-[#267FA9] sm:text-3xl md:mb-5 md:text-4xl">
              Contanos en qué podemos orientarte
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Queremos conocer tus intereses,
              inquietudes y necesidades para
              seguir construyendo una propuesta
              que acerque la formación a las
              oportunidades laborales.
            </p>

            <div className="mt-6 space-y-4 md:mt-8 md:space-y-5">

              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 shrink-0 text-[#267FA9] md:h-6 md:w-6" />

                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                  Consultas sobre capacitación y
                  preparación para el empleo.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="h-5 w-5 shrink-0 text-[#267FA9] md:h-6 md:w-6" />

                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                  Información sobre vinculación
                  y acompañamiento laboral.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#267FA9] md:h-6 md:w-6" />

                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                  Un espacio de comunicación
                  para jóvenes y empresas.
                </p>
              </div>

            </div>
          </div>

          {/* TARJETA DEL FORMULARIO */}
          <div className="min-w-0 rounded-2xl bg-white p-5 shadow-lg sm:p-7 md:p-9">

            <h3 className="mb-2 text-xl font-bold text-[#267FA9] md:text-2xl">
              Formulario de contacto
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-slate-600 md:mb-7">
              Completá los siguientes campos
              para enviarnos tu consulta.
            </p>

            <form
              onSubmit={enviarFormulario}
              className="space-y-4 md:space-y-5"
            >

              {/* NOMBRE */}
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-sm font-semibold text-slate-700 sm:text-base"
                >
                  Nombre y apellido
                </label>

                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={estadoEnvio === 'enviando'}
                  value={formulario.nombre}
                  onChange={actualizarCampo}
                  placeholder="Ingresá tu nombre"
                  className="block w-full min-w-0 rounded-lg border border-slate-300 px-3 py-3 text-base outline-none focus:border-[#267FA9] disabled:opacity-60 sm:px-4"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700 sm:text-base"
                >
                  Correo electrónico
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={estadoEnvio === 'enviando'}
                  value={formulario.email}
                  onChange={actualizarCampo}
                  placeholder="nombre@correo.com"
                  className="block w-full min-w-0 rounded-lg border border-slate-300 px-3 py-3 text-base outline-none focus:border-[#267FA9] disabled:opacity-60 sm:px-4"
                />
              </div>

              {/* TIPO DE CONSULTA */}
              <div>
                <label
                  htmlFor="tipo"
                  className="mb-2 block text-sm font-semibold text-slate-700 sm:text-base"
                >
                  Motivo de consulta
                </label>

                <select
                  id="tipo"
                  name="tipo"
                  required
                  disabled={estadoEnvio === 'enviando'}
                  value={formulario.tipo}
                  onChange={actualizarCampo}
                  className="block w-full min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-3 text-base outline-none focus:border-[#267FA9] disabled:opacity-60 sm:px-4"
                >
                  <option value="">
                    Seleccioná una opción
                  </option>

                  <option value="capacitaciones">
                    Capacitaciones
                  </option>

                  <option value="oportunidades">
                    Oportunidades laborales
                  </option>

                  <option value="empresas">
                    Vinculación con empresas
                  </option>

                  <option value="otras">
                    Otras consultas
                  </option>
                </select>
              </div>

              {/* MENSAJE */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-2 block text-sm font-semibold text-slate-700 sm:text-base"
                >
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  required
                  disabled={estadoEnvio === 'enviando'}
                  value={formulario.mensaje}
                  onChange={actualizarCampo}
                  placeholder="Escribí tu consulta..."
                  className="block w-full min-w-0 resize-y rounded-lg border border-slate-300 px-3 py-3 text-base outline-none focus:border-[#267FA9] disabled:opacity-60 sm:px-4"
                />
              </div>

              {/* INFORMACIÓN DEL FORMULARIO */}
              <div className="flex items-start gap-2 rounded-lg bg-[#F5FBFE] p-3 sm:gap-3 sm:p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#267FA9]" />

                <p className="text-xs leading-relaxed text-slate-600">
                  Los datos que ingreses se enviarán
                  a través de Formspree para recibir
                  y responder tu consulta.
                  No incluyas información sensible.
                </p>
              </div>

              {/* BOTÓN DE ENVÍO */}
              <button
                type="submit"
                disabled={estadoEnvio === 'enviando'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#ED6050] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#d94d3e] disabled:cursor-not-allowed disabled:opacity-60 sm:gap-3 sm:px-6 sm:py-4 sm:text-base"
              >
                {estadoEnvio === 'enviando'
                  ? 'Enviando...'
                  : 'Enviar consulta'}

                <Send className="h-[18px] w-[18px] shrink-0 sm:h-[19px] sm:w-[19px]" />
              </button>

              {/* CONFIRMACIÓN DE ENVÍO */}
              {estadoEnvio === 'exito' && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-lg border border-[#D4EAF5] bg-[#F5FBFE] p-4 text-sm leading-relaxed text-[#185A7A]"
                >
                  ¡Tu consulta fue enviada correctamente!
                  Gracias por comunicarte con Red Primer Empleo.
                </div>
              )}

              {/* ERROR DE ENVÍO */}
              {estadoEnvio === 'error' && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-700"
                >
                  No pudimos enviar tu consulta.
                  Verificá tu conexión e intentá nuevamente.
                </div>
              )}

            </form>

          </div>
        </div>
      </section>

    </main>
  )
}
