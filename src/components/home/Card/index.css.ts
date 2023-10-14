import { style } from '@vanilla-extract/css'

export const card = style({
  padding: '24px 0',
})

export const meta = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '10px 24px',
  marginBottom: 16,
})

export const favorite = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0 2px',
})

export const articleTitle = style({
  fontSize: 24,
  fontWeight: 600,
  marginBottom: 3,
})

export const articleDescription = style({
  color: 'var(--color-gray-4)',
  fontWeight: 300,
  marginBottom: 15,
})

export const more = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '10px 24px',
})

export const readMore = style({
  fontSize: 13,
  fontWeight: 300,
  color: 'var(--color-gray-2)',
})
