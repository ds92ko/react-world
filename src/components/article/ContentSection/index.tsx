import parse from 'html-react-parser'
import Link from 'next/link'

import { TagItem, TagList } from '@/components/common/Tags'
import { container, linkBtn } from '@/styles/app.css'
import { IArticleData } from '@/types/articles'

import ArticleMeta from '../ArticleMeta'
import { articleBody, articleContent, articleFooter } from './index.css'

interface IProps {
  data: IArticleData
}

export default function ContentSection({ data }: IProps) {
  return (
    <section className="mt-[32px]">
      <div className={container}>
        <div className={articleBody}>
          <p className={articleContent}>
            {data.body && parse(data.body.replace(/\\n/g, '<br />'))}
          </p>
          {data.tagList && (
            <TagList>
              {data.tagList.map((tag: string) => (
                <TagItem key={tag}>{tag}</TagItem>
              ))}
            </TagList>
          )}
        </div>
        <div className={articleFooter}>
          <ArticleMeta data={data} />
          <div>
            <Link href="/login" className={linkBtn}>
              Sign in
            </Link>{' '}
            or{' '}
            <Link href="/register" className={linkBtn}>
              sign up
            </Link>{' '}
            to add comments on this article.
          </div>
        </div>
      </div>
    </section>
  )
}
