import { style } from '@vanilla-extract/css'

export const tagList = style({
  display: 'flex',
  gap: 3,
  flexWrap: 'wrap',
})

export const tagItem = style({
  padding: '1px 8px',
  fontSize: 13,
  fontWeight: 300,
  color: 'var(--color-gray-3)',
  border: '1px solid var(--color-gray-2)',
  borderRadius: 12,
  selectors: {
    'aside &': {
      color: 'var(--color-white)',
      border: 0,
      background: 'var(--color-gray-5)',
      fontWeight: 400,
    },
    'aside &:hover': {
      background: 'var(--color-gray-6)',
    },
  },
})
