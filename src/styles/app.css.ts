import { style } from '@vanilla-extract/css'

export const container = style({
  maxWidth: 1140,
  margin: '0 auto',
  padding: '0 40px',
  selectors: {
    'header &': {
      height: 56,
      justifyContent: 'space-between',
      background: 'var(--color-white)',
      position: 'relative',
      zIndex: 200,
    },
    'footer &': {
      minHeight: 24,
      flexWrap: 'wrap',
    },
    '&:not(main &)': {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
    },
  },
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '0 20px',
    },
  },
})

export const logo = style({
  fontFamily: 'var(--font-titillium-web)',
  fontWeight: 700,
  selectors: {
    'header &': {
      fontSize: 24,
    },
    'main &': {
      color: 'var(--color-white)',
      textShadow: '0 1px 3px rgba(0, 0, 0, .3)',
      fontSize: 56,
    },
    'footer &': {
      fontSize: 16,
    },
    '&:not(main &)': {
      color: 'var(--color-primary)',
    },
  },
})

export const form = style({
  maxWidth: 540,
  margin: '0 auto',
})

export const linkBtn = style({
  color: 'var(--color-primary)',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
      color: 'var(--color-secondary)',
    },
  },
})

export const profile = style({
  borderRadius: '50%',
  overflow: 'hidden',
})
