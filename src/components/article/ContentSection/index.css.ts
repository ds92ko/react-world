import { style } from '@vanilla-extract/css'

export const articleBody = style({
  fontSize: 19,
  paddingBottom: 32,
  borderBottom: '1px solid var(--alpha-black-1)',
})

export const articleContent = style({
  marginBottom: 32,
})

export const articleFooter = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 48,
  paddingTop: 24,
})
