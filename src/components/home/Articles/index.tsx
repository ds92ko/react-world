'use client'

import { useEffect } from 'react'
import { useQuery } from 'react-query'

import Loading from '@/components/common/Loading'
import { fetchArticles } from '@/services/api/articles'
import useArticlesStore from '@/store/articlesStore'
import { IFetchArticlesRes } from '@/types/articles'

import Card from '../Card'
import { Pagination } from '../Pagination'
import { TabContent, TabNav } from '../Tabs'

interface IProps {
  className?: string
}

export default function Articles({ className }: IProps) {
  const { articlesParams, articlesCount, setArticlesCount } = useArticlesStore()
  const { data, isLoading, isError } = useQuery(
    ['articles', articlesParams],
    async () => {
      const response: IFetchArticlesRes = await fetchArticles(articlesParams)

      return response
    },
    { staleTime: Infinity }
  )

  useEffect(() => {
    if (data && articlesCount !== data.articlesCount)
      setArticlesCount(data.articlesCount)
  }, [articlesCount, data, setArticlesCount])

  return (
    <div className={`w-full ${className}`}>
      <TabNav />
      {isLoading && <Loading />}
      {isError && <div>isError</div>}
      {data && (
        <>
          <TabContent>
            {data.articles.map((article, idx) => (
              <Card key={idx} data={article} />
            ))}
          </TabContent>
          <Pagination />
        </>
      )}
    </div>
  )
}
