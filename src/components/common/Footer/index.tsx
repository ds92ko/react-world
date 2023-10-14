import Link from 'next/link'

import { container, linkBtn, logo } from '@/styles/app.css'

import { copyright, footer } from './index.css'

function Footer() {
  return (
    <footer className={footer}>
      <div className={container}>
        <Link className={logo} href="/">
          conduit
        </Link>
        <div className={copyright}>
          © 2023. An interactive learning project from&nbsp;
          <a href="https://thinkster.io" className={linkBtn} target="_blank">
            Thinkster
          </a>
          . Code licensed under MIT.
        </div>
      </div>
    </footer>
  )
}

export default Footer
