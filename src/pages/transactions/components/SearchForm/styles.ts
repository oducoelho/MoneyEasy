import { styled } from '@/styles'

export const SearchFormContainer = styled('form', {
  display: 'flex',
  gap: '1rem',

  input: {
    flex: 1,
    borderRadius: 6,
    border: 0,
    background: '$gray900',
    color: '$gray300',
    padding: '1rem',

    '&:placeholder': {
      color: '$gray500',
    },
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',

    padding: '1rem',
    background: 'transparent',
    border: '1px solid $green300',
    color: '$green300',
    fontWeight: 'bold',
    borderRadius: 6,
    cursor: 'pointer',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:hover': {
      background: '$green500',
      border: '$green500',
      color: '$white',
    },
  },
})
