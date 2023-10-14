import { globalStyle } from '@vanilla-extract/css'

import vars from './vars.css'

globalStyle(':root', {
  vars: {
    '--color-primary': vars.color.primary,
    '--color-secondary': vars.color.secondary,
    '--color-danger': vars.color.danger,
    '--color-warning': vars.color.warning,
    '--color-success': vars.color.success,
    '--color-white': vars.color.white,
    '--color-black-1': vars.color.black1,
    '--color-black-2': vars.color.black2,
    '--color-gray-1': vars.color.gray1,
    '--color-gray-2': vars.color.gray2,
    '--color-gray-3': vars.color.gray3,
    '--color-gray-4': vars.color.gray4,
    '--color-gray-5': vars.color.gray5,
    '--color-gray-6': vars.color.gray6,
    '--color-gray-7': vars.color.gray7,
    '--color-gray-8': vars.color.gray8,
    '--color-gray-9': vars.color.gray9,
    '--alpha-black-1': vars.alpha.black1,
    '--alpha-black-2': vars.alpha.black2,
    '--alpha-black-3': vars.alpha.black3,
    '--alpha-black-4': vars.alpha.black4,
    '--alpha-black-5': vars.alpha.black5,
    '--alpha-black-6': vars.alpha.black6,
    '--alpha-black-7': vars.alpha.black7,
    '--alpha-black-8': vars.alpha.black8,
    '--alpha-black-9': vars.alpha.black9,
  },
})

globalStyle('html, body', {
  fontFamily: 'var(--font-source-sans-3)',
  color: 'var(--color-black-1)',
})

globalStyle('main', {
  minHeight: 'calc(100vh - 56px)',
  padding: '56px 0 43px',
  position: 'relative',
  zIndex: 200,
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  lineHeight: 1.1,
})
