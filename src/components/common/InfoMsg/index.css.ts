import { style } from '@vanilla-extract/css'

export const infoMsg = style({
  display: 'flex',
  gap: 4,
  fontWeight: 'bold',
  selectors: {
    '&.danger': {
      color: 'var(--color-danger)',
    },
    '&.warning': {
      color: 'var(--color-warning)',
    },
    '&.success': {
      color: 'var(--color-success)',
    },
  },
})
