import { style } from '@vanilla-extract/css'

export const button = style({
  padding: '12px 24px',
  borderRadius: 4,
  color: 'var(--color-white)',
  background: 'var(--color-primary)',
  fontSize: 20,
  selectors: {
    '&:hover': {
      background: 'var(--color-secondary)',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.65,
    },
  },
})
