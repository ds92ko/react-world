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
  return (
    <div className={tabNav}>
      <ul className={tabNavList}>
        <li className={`${tabNavItem} active`}>
          <button type="button">Global Feed</button>
        </li>
        <li className={tabNavItem}>
          <button type="button"># Welcome</button>
        </li>
      </ul>
    </div>
  )
}

function TabContent() {
  return (
    <ul className={tabContentList}>
      <li className={tabContentItem}>
        <Card />
      </li>
      <li className={tabContentItem}>
        <Card />
      </li>
    </ul>
  )
}

export default function Tabs({ className }: IProps) {
  return (
    <div className={`w-full ${className}`}>
      <TabNav />
      <TabContent />
    </div>
  )
}

Tabs.defaultProps = {
  className: '',
}
