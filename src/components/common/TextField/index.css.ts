import { style } from '@vanilla-extract/css'

export const textField = style({
  width: '100%',
  padding: '12px 24px',
  color: '#55595C',
  fontSize: 20,
  border: '1px solid rgba(0, 0, 0, 0.15)',
  borderRadius: 4,
  outline: 'none',
  background: 'var(--color-white)',
  selectors: {
    '&:focus': {
      border: '1px solid var(--color-primary)',
    },
    '&:disabled': {
      background: '#eceeef',
    },
  },
})
