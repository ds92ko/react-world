import Link from 'next/link'

import AuthorInfo from '@/components/common/AuthorInfo'
import Icon from '@/components/common/Icon'
import { TagItem, TagList } from '@/components/common/Tags'
import { IArticleData } from '@/types/articles'

import {
  articleDescription,
  articleTitle,
  card,
  favorite,
  meta,
  more,
  readMore,
} from './index.css'

interface IProps {
  data: IArticleData
}

export default function Card({ data }: IProps) {
  return (
    <article className={card}>
      <div className={meta}>
        <AuthorInfo
          imgSrc={data.author.image}
          username={data.author.username}
          createdAt={data.createdAt}
        />
        {/* TODO: 버튼 컴포넌트 분리 */}
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
