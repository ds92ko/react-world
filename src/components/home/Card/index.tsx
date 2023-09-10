import Image from 'next/image'
import Link from 'next/link'

import Icon from '@/components/common/Icon'
import { TagItem, TagList } from '@/components/common/Tags'

import {
  author,
  card,
  createdAt,
  description,
  favorite,
  info,
  meta,
  more,
  profile,
  readMore,
  title,
} from './index.css'

export default function Card() {
  return (
    <article className={card}>
      <div className={meta}>
        <div className={info}>
          <div className={profile}>
            <Image
              width={32}
              height={32}
              src="https://api.realworld.io/images/demo-avatar.png"
              alt="profile"
            />
          </div>
          <div>
            <Link href="/" className={author}>
              Anah Benešová
            </Link>
            <p className={createdAt}>December 9, 2022</p>
          </div>
        </div>
        <button type="button" className={favorite}>
          <Icon name="heart" type="solid" className="w-[12px]" />
          1786
        </button>
      </div>
      <div>
        <h2 className={title}>
          Try to transmit the HTTP card, maybe it will override the multi-byte
          hard drive!
        </h2>
        <p className={description}>
          Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel
          quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.
        </p>
        <div className={more}>
          <span className={readMore}>Read more...</span>
          <TagList>
            <TagItem>voluptate</TagItem>
            <TagItem>rerum</TagItem>
          </TagList>
        </div>
      </div>
    </article>
  )
}
