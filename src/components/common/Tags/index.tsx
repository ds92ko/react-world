import { MouseEvent, ReactNode, useEffect } from 'react'
import { useQueryClient } from 'react-query'

import useArticlesStore, { initArticlesParams } from '@/store/articlesStore'

import { tagItem, tagList } from './index.css'

interface IProps {
  children: ReactNode
}

export function TagList({ children }: IProps) {
  return <ul className={tagList}>{children}</ul>
}

export function TagItem({ children }: IProps) {
  const { articlesParams, setArticlesParams } = useArticlesStore()
  const queryClient = useQueryClient()

  const handleClickTag = (e: MouseEvent<HTMLButtonElement>) => {
    const tagButton = e.target as HTMLButtonElement
    const tag = tagButton.innerHTML

    setArticlesParams({ ...initArticlesParams, tag })
  }

  useEffect(() => {
    queryClient.invalidateQueries(['article', articlesParams])
  }, [articlesParams, queryClient])

  return (
    <li className={tagItem}>
      <button type="button" onClick={handleClickTag}>
        {children}
      </button>
    </li>
  )
}
