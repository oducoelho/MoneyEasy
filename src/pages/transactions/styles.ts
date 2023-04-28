import { styled } from "@/styles";

export const TransactionsContainer = styled('main', {
  width: '100%',
  maxWidth: '1120px',
  margin: '4rem auto 0',
  padding: '0 1.5rem',
})
export const TransactionsTable = styled('table', {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: '0 0.5rem',
  marginTop: '1.5rem',

  td: {
    padding: '1.25rem 2rem',
    background: '$gray700',

    '&:first-child': {
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6
    },
    '&:last-child': {
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6
    }
  }
})

export const PriceHighLight = styled('span', {
  
})