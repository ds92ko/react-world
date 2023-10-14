import { ReactNode, useState } from 'react'

import useArticlesStore from '@/store/articlesStore'
import useUserStore from '@/store/userStore'

import {
  tabContentItem,
  tabContentList,
  tabNav,
  tabNavItem,
  tabNavList,
} from './index.css'

export function TabNav() {
  const { isLoggedIn } = useUserStore()
  const { articlesParams, resetArticlesParams, resetFeedParams } =
    useArticlesStore()
  const [currentTab, setCurrentTab] = useState(
    isLoggedIn() ? 'local' : 'global'
  )
  const { tag } = articlesParams

  return (
    <div className={tabNav}>
      <ul className={tabNavList}>
        {isLoggedIn() && (
          <li
            className={`${tabNavItem} ${
              tag || currentTab !== 'local' ? '' : 'active'
            }`}>
            <button
              type="button"
              onClick={() => {
                resetFeedParams()
                setCurrentTab('local')
              }}>
              Your Feed
            </button>
          </li>
        )}
        <li
          className={`${tabNavItem} ${
            tag || currentTab !== 'global' ? '' : 'active'
          }`}>
          <button
            type="button"
            onClick={() => {
              resetArticlesParams()
              setCurrentTab('global')
            }}>
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
