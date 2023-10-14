'use client'

import Link from 'next/link'

import { container, logo } from '@/styles/app.css'

import { Nav } from '../Nav'
import { header } from './index.css'
import { useNav } from './index.hook'

function Header() {
  const { navOpen, handleToggleNav } = useNav()

  return (
    <header className={`${header} ${navOpen ? 'navOpen' : ''}`}>
      <div className={container}>
        <h1>
          <Link href="/" className={logo}>
            conduit
          </Link>
        </h1>
        <Nav onToggle={handleToggleNav} />
      </div>
    </header>
  )
}

export default Header
