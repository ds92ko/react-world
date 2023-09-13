'use client'

import { ReactNode } from 'react'
import { useQuery } from 'react-query'

import { fetchArticles } from '@/services/api/articles'
import useArticlesStore, { initArticlesParams } from '@/store/articlesStore'
import { IFetchArticlesRes } from '@/types/articles'

import Card from '../Card'
import {
  tabContentItem,
  tabContentList,
  tabNav,
  tabNavItem,
  tabNavList,
} from './index.css'

interface IProps {
  className?: string
}

function TabNav() {
  const { articlesParams, setArticlesParams } = useArticlesStore()
  const { tag } = articlesParams

  const handleClickTab = () => setArticlesParams({ ...initArticlesParams })

  return (
    <div className={tabNav}>
      <ul className={tabNavList}>
        <li className={`${tabNavItem} ${tag ? '' : 'active'}`}>
          <button type="button" onClick={handleClickTab}>
            Global Feed
          </button>
        </li>
        {tag && (
          <li className={`${tabNavItem} ${tag ? 'active' : ''}`}>
            <button type="button"># {tag}</button>
          </li>
        )}
      </ul>
    </div>
  )
}

function TabContent({ children }: { children: ReactNode }) {
  const childArray = Array.isArray(children) ? children : [children]

  return (
    <ul className={tabContentList}>
      {childArray.map((item, idx) => (
        <li key={idx} className={tabContentItem}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Tabs({ className = '' }: IProps) {
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
    </div>
  )
}
