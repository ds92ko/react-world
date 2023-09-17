import Link from 'next/link'

import { pageInfo, pageTitle } from './index.css'

interface IProps {
  children: string
  link: {
    href: string
    info: string
  }
}

function PageTitle({ children, link }: IProps) {
  const { href, info } = link

  return (
    <>
      <h2 className={pageTitle}>{children}</h2>
      <p className={pageInfo}>
        <Link href={href}>{info}</Link>
      </p>
    </>
  )
}

export default PageTitle
