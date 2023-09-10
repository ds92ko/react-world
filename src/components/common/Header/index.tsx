'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { container, logo } from '@/styles/app.css'

import { header, line, navButton, navItem, navList } from './index.css'

function Header() {
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [navOpen])

  return (
    <header className={`${header} ${navOpen ? 'navOpen' : ''}`}>
      <div className={container}>
        <h1>
          <Link href="/" className={logo}>
            conduit
          </Link>
        </h1>
        <nav>
          <button
            type="button"
            className={navButton}
            onClick={() => setNavOpen(!navOpen)}>
            <i className={line} />
            <i className={line} />
            <i className={line} />
          </button>
          <ul className={navList}>
            <li className={`${navItem} active`}>
              <Link href="/">Home</Link>
            </li>
            <li className={navItem}>
              <Link href="/login">Sign in</Link>
            </li>
            <li className={navItem}>
              <Link href="/register">Sign up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
