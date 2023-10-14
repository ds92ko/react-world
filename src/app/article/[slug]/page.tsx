'use client'

import { useQuery } from 'react-query'

import BannerSection from '@/components/article/BannerSection'
import ContentSection from '@/components/article/ContentSection'
import Loading from '@/components/common/Loading'
import { fetchArticleDetail } from '@/services/api/articles'

export default function ArticleSlug({ params }: { params: { slug: string } }) {
  const { data, isLoading, isError } = useQuery(
    ['articleDetail', params.slug],
    async () => {
      const response = await fetchArticleDetail(params.slug)

      return response
    },
    { staleTime: Infinity }
  )
  console.log(params.slug)

  console.log(data)

  if (isLoading) return <Loading />
  if (isError) return <div>isError</div>
  return (
    <>
      <BannerSection data={data} />
      <ContentSection data={data} />
    </>
  )
}
