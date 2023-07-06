import { styled } from '@/styles'

export const Avatar = styled('img', {
  borderRadius: '100%',
  objectFit: 'cover',
  width: '40px',
  height: '40px',
  border: '3px solid $gray500',
})

export const LoginContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: '$white',
  div: {
    cursor: 'pointer',
  },
})
