
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const buscarSeccion = () => {
        const elemento = document.getElementById(
          hash.substring(1)
        )

        if (elemento) {
          elemento.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }

      requestAnimationFrame(buscarSeccion)
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      })
    }
  }, [pathname, hash])

  return null
}
