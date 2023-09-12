import { style } from '@vanilla-extract/css'

export const content = style({
  display: 'flex',
  gap: '0 30px',
  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
})

export const tabs = style({
  flexGrow: 1,
})

export const popularTags = style({
  flexShrink: 0,
  width: '24%',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      marginBottom: 48,
    },
  },
})
