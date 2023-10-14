import icons from '../Icon/icons'

export type NavItemType = {
  href: string
  name: string
  icon?: keyof typeof icons
  imgSrc?: string
}

export interface NavListType {
  default: NavItemType[]
  logged: NavItemType[]
}

export const getNavMenuList = (name: string, imgSrc: string): NavListType => ({
  default: [
    {
      href: '/login',
      name: 'Sign in',
    },
    {
      href: '/register',
      name: 'Sign up',
    },
  ],
  logged: [
    {
      href: '/editor',
      name: ' New Article',
      icon: 'pencilSquare',
    },
    {
      href: '/settings',
      name: 'Settings',
      icon: 'setting',
    },
    {
      href: `/@${name}`,
      name,
      imgSrc,
    },
  ],
})
