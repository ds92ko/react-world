import Image from 'next/image'
import Link from 'next/link'

import Icon from '@/components/common/Icon'
import { TagItem, TagList } from '@/components/common/Tags'
import { IArticlesData } from '@/types/articles'

import {
  articleDescription,
  articleTitle,
  authorLink,
  card,
  createdDate,
  favorite,
  info,
  meta,
  more,
  profile,
  readMore,
} from './index.css'

interface IProps {
  data: IArticlesData
}

export default function Card({ data }: IProps) {
  return (
    <article className={card}>
      <div className={meta}>
        <div className={info}>
          <div className={profile}>
            <Image
              width={32}
              height={32}
              src={data.author.image}
              alt="profile"
            />
          </div>
          <div>
            <Link href={`/@${data.author.username}`} className={authorLink}>
              {data.author.username}
            </Link>
            <p className={createdDate}>{data.createdAt}</p>
          </div>
        </div>
        <button
          type="button"
          className={`${favorite} ${data.favorited ? 'active' : ''}`}>
          <Icon name="heart" type="solid" className="w-[12px]" />
          {data.favoritesCount}
        </button>
      </div>
      <Link href={`/article/${data.slug}`}>
        <h2 className={articleTitle}>{data.title}</h2>
        <p className={articleDescription}>{data.description}</p>
        <div className={more}>
          <span className={readMore}>Read more...</span>
          <TagList>
            {data.tagList.map((tag, idx) => (
              <TagItem key={idx}>{tag}</TagItem>
            ))}
          </TagList>
        </div>
      </Link>
    </article>
  )
}
