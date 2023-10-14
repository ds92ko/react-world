import Image from 'next/image'
import Link from 'next/link'

import useUserStore from '@/store/userStore'
import { profile } from '@/styles/app.css'

import Icon from '../Icon'
import { getNavMenuList } from './index.const'
import { line, navButton, navItem, navList } from './index.css'

type NavProps = {
  onToggle: () => void
}

export function Nav({ onToggle }: NavProps) {
  const { userData, isLoggedIn } = useUserStore()
  const navMenuList = getNavMenuList(userData.username, userData.image)
  const menuType = isLoggedIn() ? 'logged' : 'default'

  return (
    <nav>
      <button type="button" className={navButton} onClick={onToggle}>
        <i className={line} />
        <i className={line} />
        <i className={line} />
      </button>
      <ul className={navList}>
        <li className={`${navItem} active`}>
          <Link href="/">Home</Link>
        </li>
        {navMenuList[menuType].map(item => (
          <li key={item.name} className={navItem}>
            <Link href={item.href}>
              {item.icon && (
                <Icon
                  name={item.icon}
                  type="solid"
                  className="w-[16px] mr-[2px] inline-block align-middle"
                />
              )}
              {item.imgSrc && (
                <div
                  className={`${profile} mr-[4px] inline-block align-middle`}>
                  <Image
                    width={26}
                    height={26}
                    src={item.imgSrc}
                    alt="profile"
                  />
                </div>
              )}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
