import { style } from '@vanilla-extract/css'

export const pageTitle = style({
  fontSize: 40,
  marginBottom: 8,
  textAlign: 'center',
})

export const pageInfo = style({
  color: 'var(--color-primary)',
  marginBottom: 16,
  textAlign: 'center',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
      color: 'var(--color-secondary)',
    },
  },
})
