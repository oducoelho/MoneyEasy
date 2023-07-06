import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    fontSize: '62.5%',
  },
  body: {
    backgroundColor: '$gray800',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  '@media (max-width: 1440px)': {
    html: {
      fontSize: '50%',
    },
  },
  '@media (max-width: 1024px)': {
    html: {
      fontSize: '50%',
    },
  },
})
