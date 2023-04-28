import { styled } from "@/styles";
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: '#00000075',
})
export const Content = styled(Dialog.Content, {
  minWidth: '32rem',
  borderRadius: '6px',
  padding: '2.5rem 3rem',
  backgroundColor: '$gray800',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  form: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    input: {
      borderRadius: '6px',
      border: 0,
      background: '$gray900',
      color: '$gray300',
      padding: '1rem',
    }
  }
})
export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  backgroundColor: 'transparent',
  border: 0,
  top: '1.5rem',
  lineHeight: 0,
  right: '1.5rem',
  cursor: 'pointer',
  color: '$green500',
})
export const TransactionType = styled(RadioGroup.Root, {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',
  marginTop: '0.5rem',
})
export const TransactionTypeButton = styled('header', {

})