import { style } from '@vanilla-extract/css'

export const button = style({
  outlineOffset: -1,
  selectors: {
    '&.md': {
      borderRadius: 3,
      fontSize: 14,
      padding: '4px 8px',
    },
    '&.lg': {
      borderRadius: 4,
      fontSize: 20,
      padding: '12px 24px',
    },
    '&.solid, &.outline:hover, &.outline.active': {
      color: 'var(--color-white)',
      background: 'var(--color-primary)',
    },
    '&.outline': {
      color: 'var(--color-primary)',
    },
    '&.outline:hover, &.outline.active': {
      outlineColor: 'var(--color-primary)',
    },
    '&.solid:hover': {
      background: 'var(--color-secondary)',
    },
    '&.outline-white': {
      color: 'var(--color-gray-9)',
      outline: '1px solid var(--color-gray-9)',
    },
    '&.outline-white:hover, &.outline-white.active': {
      background: 'var(--color-gray-9)',
      color: 'var(--color-white)',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.65,
    },
  },
})
