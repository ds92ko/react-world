import { style } from '@vanilla-extract/css'

export const pagination = style({
  padding: '16px 0',
})

export const pageList = style({
  display: 'flex',
  gap: -1,
})

export const pageItem = style({
  border: '1px solid var(--color-gray-7)',
})

export const pageBtn = style({
  padding: '8px 12px',
})
