import Banner from '@/components/common/Banner'
import { IArticleData } from '@/types/articles'

import ArticleMeta from '../ArticleMeta'
import { bannerTitle } from './index.css'

interface IProps {
  data: IArticleData
}

export default function BannerSection({ data }: IProps) {
  return (
    <Banner className="!bg-[var(--color-gray-5)]">
      <h2 className={bannerTitle}>{data.title}</h2>
      <ArticleMeta theme="white" data={data} />
    </Banner>
  )
}
