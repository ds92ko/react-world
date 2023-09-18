'use client'

import { useQuery } from 'react-query'

import BannerSection from '@/components/article/BannerSection'
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

  if (isLoading) return <Loading />
  if (isError) return <div>isError</div>
  return <BannerSection data={data} />
}
