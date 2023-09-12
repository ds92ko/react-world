import { container, logo } from '@/styles/app.css'

import { banner, description } from './index.css'

interface IProps {
  className?: string
}

export default function Banner({ className = '' }: IProps) {
  return (
    <section className={`${banner} ${className}`}>
      <div className={container}>
        <h2 className={logo}>conduit</h2>
        <p className={description}>A place to share your knowledge.</p>
      </div>
    </section>
  )
}
