import { style } from '@vanilla-extract/css'

export const banner = style({
  textAlign: 'center',
  background: 'var(--color-primary)',
  color: 'var(--color-white)',
  padding: '32px 0',
  boxShadow: 'inset 0 -8px 8px -8px var(--alpha-black-3)',
})

export const description = style({
  fontSize: 24,
  fontWeight: 300,
  marginTop: 8,
})
