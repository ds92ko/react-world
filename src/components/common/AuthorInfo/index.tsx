import Image from 'next/image'
import Link from 'next/link'

import { profile } from '@/styles/app.css'

import { authorLink, createdDate, info } from './index.css'

interface IProps {
  imgSrc: string
  username: string
  createdAt: string
  textColor?: 'primary' | 'white'
}

export default function AuthorInfo({
  imgSrc,
  username,
  createdAt,
  textColor = 'primary',
}: IProps) {
  return (
    <div className={info}>
      <div className={profile}>
        <Image width={32} height={32} src={imgSrc} alt="profile" />
      </div>
      <div className={textColor}>
        <Link href={`/@${username}`} className={authorLink}>
          {username}
        </Link>
        <p className={createdDate}>{createdAt}</p>
      </div>
    </div>
  )
}
