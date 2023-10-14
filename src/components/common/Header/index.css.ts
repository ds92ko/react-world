import { style } from '@vanilla-extract/css'

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 300,
  width: '100%',
  background: 'var(--color-white)',
  boxShadow: '0 8px 8px -8px var(--alpha-black-3)',
  '@media': {
    'screen and (max-width: 768px)': {
      selectors: {
        '&.navOpen::before': {
          content: '',
          width: '100%',
          height: '100vh',
          background: 'var(--alpha-black-7)',
          display: 'block',
          position: 'absolute',
        },
      },
    },
  },
})
