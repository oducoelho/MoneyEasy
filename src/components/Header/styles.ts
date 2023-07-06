import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  background: '$gray900',
  padding: '7rem 0 10rem',
})
export const HeaderContent = styled('div', {
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 1.5rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
export const NewTransactionButton = styled('button', {
  height: '50px',
  border: 'none',
  background: '$green500',
  color: '$white',
  fontWeight: 'bold',
  padding: '0 1.25rem',
  borderRadius: '6px',
  cursor: 'pointer',

  '&:hover': {
    background: '$green700',
    transition: '0.5s',
  },
})

export const Login = styled('div', {
  border: '1px solid $red400',
  padding: '10px',
  background: '$red400',
  borderRadius: 8,

  span: {
    color: '$white',
    cursor: 'pointer',

    h3: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '13px',
      gap: '10px',
    },
  },
})
export const Logged = styled('div', {
  display: 'flex',
  alignItems: 'center',
  background: 'transparent',
  borderRadius: 0,
  div: {
    cursor: 'pointer',
  },
})

export const Avatar = styled('img', {
  borderRadius: '100%',
  objectFit: 'cover',
  width: '40px',
  height: '40px',
  border: '3px solid $gray500',
})
