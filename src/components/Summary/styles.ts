import { styled } from '@/styles'

export const SummaryContainer = styled('section', {
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 1.5rem',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',

  marginTop: '-5rem',
})
export const SummaryCard = styled('div', {
  background: '$gray600',
  borderRadius: '6px',
  padding: '3rem 2rem',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '$gray300',

    span: {
      fontSize: '16px',
    },
  },
  strong: {
    display: 'block',
    marginTop: '1rem',
    fontSize: '2rem',
    color: '$white',
  },
  variants: {
    variant: {
      green: {
        background: '$green700',
      },
    },
  },
})
