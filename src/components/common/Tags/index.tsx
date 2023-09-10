import { ReactNode } from 'react'

import { tagItem, tagList } from './index.css'

interface IProps {
  children: ReactNode
}

export function TagList({ children }: IProps) {
  return <ul className={tagList}>{children}</ul>
}

export function TagItem({ children }: IProps) {
  return <li className={tagItem}>{children}</li>
}
