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
})

export const createdDate = style({
  color: 'var(--color-gray-2)',
  fontSize: 12,
  fontWeight: 300,
  lineHeight: '16px',
})

export const favorite = style({
  display: 'flex',
  padding: '4px 8px',
  alignItems: 'center',
  color: 'var(--color-primary)',
  fontSize: 14,
  gap: '0 2px',
  background: 'var(--color-white)',
  border: '1px solid var(--color-primary)',
  borderRadius: 3,
  selectors: {
    '&:hover, &.active': {
      background: 'var(--color-primary)',
      color: 'var(--color-white)',
    },
  },
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
