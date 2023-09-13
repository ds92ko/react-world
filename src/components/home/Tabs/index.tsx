import { ReactNode } from 'react'

import useArticlesStore, { initArticlesParams } from '@/store/articlesStore'

import {
  tabContentItem,
  tabContentList,
  tabNav,
  tabNavItem,
  tabNavList,
} from './index.css'

export function TabNav() {
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

export function TabContent({ children }: { children: ReactNode }) {
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
