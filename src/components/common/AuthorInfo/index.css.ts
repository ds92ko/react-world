import { style } from '@vanilla-extract/css'

export const info = style({
  display: 'flex',
  gap: '0 8px',
  alignItems: 'center',
})

export const profile = style({
  borderRadius: '50%',
  overflow: 'hidden',
})

export const authorLink = style({
  color: 'var(--color-primary)',
  fontWeight: 500,
  lineHeight: '16px',
  selectors: {
    '.white &': {
      color: 'var(--color-white)',
    },
  },
})

export const createdDate = style({
  color: 'var(--color-gray-2)',
  fontSize: 12,
  fontWeight: 300,
  lineHeight: '16px',
  selectors: {
    '.white &': {
      color: 'var(--color-gray-1)',
    },
  },
})
