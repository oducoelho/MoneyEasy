import { styled } from "@/styles";

export const HeaderContainer = styled('header', {
  background: '$gray900',
  padding: '2.5rem 0 7.5rem'
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
    transition: '0.5s'
  }
})