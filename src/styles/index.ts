import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      gray100: '#E1E1E6',
      gray300: '#C4C4CC',
      gray400: '#8D8D99',
      gray500: '#7C7C8A',
      gray600: '#323238',
      gray700: '#29292E',
      gray800: '#202024',
      gray900: '#121214',

      green300: '#00B37E',
      green500: '#00875F',
      green700: '#015F43',

      red300: '#F75A68',
      red400: '#DB4437',
      red500: '#AB222E',
      red700: '#7A1921',
    },

    fontSizes: {
      ss: '1.2rem',
      sm: '1.4rem',
      md: '1.8rem',
      lg: '2.0rem',
      xl: '2.4rem',
      '2xl': '3.2rem',
      '3xl': '3.6rem',
    },
  },
})
