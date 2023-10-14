import { useEffect, useState } from 'react'

export const useNav = () => {
  const [navOpen, setNavOpen] = useState(false)

  const handleToggleNav = () => setNavOpen(!navOpen)

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = navOpen ? 'hidden' : 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [navOpen])

  return { navOpen, handleToggleNav }
}
