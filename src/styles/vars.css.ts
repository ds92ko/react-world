import { createGlobalTheme } from '@vanilla-extract/css'

const vars = createGlobalTheme(':root', {
  color: {
    primary: '#5CB85C',
    white: '#FFF',
    black1: '#373A3C',
    black2: '#555',
    gray1: '#F3F3F3',
    gray2: '#BBB',
    gray3: '#AAA',
    gray4: '#999',
    gray5: '#818A91',
    gray6: '#687077',
  },
  alpha: {
    black1: 'rgba(0, 0, 0, .1)',
    black2: 'rgba(0, 0, 0, .2)',
    black3: 'rgba(0, 0, 0, .3)',
    black4: 'rgba(0, 0, 0, .4)',
    black5: 'rgba(0, 0, 0, .5)',
    black6: 'rgba(0, 0, 0, .6)',
    black7: 'rgba(0, 0, 0, .7)',
    black8: 'rgba(0, 0, 0, .8)',
    black9: 'rgba(0, 0, 0, .9)',
  },
})

export default vars
