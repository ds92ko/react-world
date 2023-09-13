import { MouseEvent, ReactNode } from 'react'

import useArticlesStore, { initArticlesParams } from '@/store/articlesStore'

import { tagItem, tagList } from './index.css'

interface IProps {
  children: ReactNode
}

export function TagList({ children }: IProps) {
  return <ul className={tagList}>{children}</ul>
}

export function TagItem({ children }: IProps) {
  const { setArticlesParams } = useArticlesStore()

  const handleClickTag = (e: MouseEvent<HTMLButtonElement>) => {
    const tagButton = e.target as HTMLButtonElement
    const tag = tagButton.innerHTML

    setArticlesParams({ ...initArticlesParams, tag })
  }

  return (
    <li className={tagItem}>
      <button type="button" onClick={handleClickTag}>
        {children}
      </button>
    </li>
  )
}
