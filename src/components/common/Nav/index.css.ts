import { style } from '@vanilla-extract/css'

export const navButton = style({
  display: 'none',
  width: 30,
  height: 20,
  position: 'relative',
  verticalAlign: 'middle',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'block',
    },
  },
})

export const line = style({
  position: 'absolute',
  left: 0,
  width: '100%',
  height: 2,
  background: 'var(--color-primary)',
  selectors: {
    '&:nth-of-type(1)': {
      top: 0,
    },
    '&:nth-of-type(2)': {
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '&:nth-of-type(3)': {
      bottom: 0,
    },
  },
})

export const navList = style({
  display: 'flex',
  gap: '0 16px',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
      selectors: {
        '.navOpen &': {
          display: 'block',
          position: 'absolute',
          background: 'var(--color-white)',
          width: '100%',
          top: '100%',
          left: 0,
        },
      },
    },
  },
})

export const navItem = style({
  color: 'var(--alpha-black-3)',
  selectors: {
    '&.active': {
      color: 'var(--alpha-black-8)',
    },
    '&:not(.active):hover': {
      color: 'var(--alpha-black-6)',
    },
  },
  '@media': {
    'screen and (max-width: 768px)': {
      selectors: {
        '.navOpen &': {
          padding: '13px 25px',
          borderTop: '1px solid var(--alpha-black-1)',
        },
      },
    },
  },
})
