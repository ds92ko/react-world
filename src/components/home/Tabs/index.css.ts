import { style } from '@vanilla-extract/css'

export const tabNav = style({
  overflowX: 'auto',
})

export const tabNavList = style({
  display: 'flex',
  width: 'max-content',
})

export const tabNavItem = style({
  color: 'var(--color-gray-3)',
  padding: '8px 16px',
  borderBottom: '2px solid transparent',
  selectors: {
    '&:hover': {
      color: 'var(--color-black-2)',
    },
    '&.active': {
      color: 'var(--color-primary)',
      borderBottom: '2px solid var(--color-primary)',
    },
  },
})

export const tabContentList = style({
  marginTop: -1,
})

export const tabContentItem = style({
  borderTop: '1px solid var(--alpha-black-1)',
})
