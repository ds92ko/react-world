import { style } from '@vanilla-extract/css'

export const pagination = style({
  padding: '16px 0',
})

export const pageList = style({
  display: 'flex',
  flexWrap: 'wrap',
})

export const pageBtn = style({
  padding: '8px 12px',
  color: 'var(--color-primary)',
  border: '1px solid var(--color-gray-7)',
  marginRight: -1,
  background: 'var(--color-white)',
  selectors: {
    'li:first-of-type > &': {
      borderRadius: '4px 0 0 4px',
    },
    'li:last-of-type > &': {
      borderRadius: '0 4px 4px 0',
    },
    'li.current > &': {
      color: 'var(--color-white)',
      border: '1px solid var(--color-primary)',
      background: 'var(--color-primary)',
    },
    '&:hover': {
      textDecoration: 'underline',
    },
    'li:not(.current) > &:hover': {
      background: 'var(--color-gray-8)',
    },
  },
})
