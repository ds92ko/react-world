import AuthorInfo from '@/components/common/AuthorInfo'
import Banner from '@/components/common/Banner'
import { IArticleData } from '@/types/articles'

import { bannerTitle } from './intex.css'

interface IProps {
  data: IArticleData
}

export default function BannerSection({ data }: IProps) {
  return (
    <Banner>
      <h2 className={bannerTitle}>{data.title}</h2>
      <AuthorInfo
        imgSrc={data.author.image}
        username={data.author.username}
        createdAt={data.createdAt}
        textColor="white"
      />
    </Banner>
  )
}
