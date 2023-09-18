import { ReactNode } from 'react'

import { container, logo } from '@/styles/app.css'

import { banner } from './index.css'

interface IProps {
  children: ReactNode
  hasLogo?: boolean
  className?: string
}

export default function Banner({
  children,
  hasLogo = false,
  className = '',
}: IProps) {
  return (
    <section
      className={`${banner} ${
        hasLogo ? 'text-center' : 'text-left'
      } ${className}`}>
      <div className={container}>
        {hasLogo && <h2 className={logo}>conduit</h2>}
        {children}
      </div>
    </section>
  )
}
