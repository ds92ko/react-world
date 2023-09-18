import { keyframes, style } from '@vanilla-extract/css'

const rotate = keyframes({
  '100%': { transform: 'rotate(360deg)' },
})

const dash = keyframes({
  '0%': { strokeDasharray: '1, 150', strokeDashoffset: 0 },
  '50%': { strokeDasharray: '90, 150', strokeDashoffset: -35 },
  '100%': { strokeDasharray: '90, 150', strokeDashoffset: -124 },
})

export const loading = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 30,
})

export const spinner = style({
  width: 50,
  height: 50,
  animation: `${rotate} 2s linear infinite`,
})

export const path = style({
  stroke: 'var(--color-primary)',
  transformOrigin: 'center',
  animation: `${dash} 1.5s ease-in-out infinite`,
})
