import { style } from '@vanilla-extract/css'

export const content = style({
  display: 'flex',
  gap: '0 30px',
})

export const tabs = style({
  flexGrow: 1,
})

export const popularTags = style({
  flexShrink: 0,
  width: '22%',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
})
