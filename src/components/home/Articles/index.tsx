'use client'

import { useQuery } from 'react-query'

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
  const { articlesParams } = useArticlesStore()
  const { data, isLoading, isError } = useQuery(
    ['article', articlesParams],
    async () => {
      const response: IFetchArticlesRes = await fetchArticles(articlesParams)

      return response
    },
    { staleTime: Infinity }
  )

  return (
    <div className={`w-full ${className}`}>
      <TabNav />
      {isLoading && <div>isLoading</div>}
      {isError && <div>isError</div>}
      {data && (
        <TabContent>
          {data.articles.map((article, idx) => (
            <Card key={idx} data={article} />
          ))}
        </TabContent>
      )}
      <Pagination />
    </div>
  )
}
