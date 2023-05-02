import { HeaderContainer, HeaderContent, Login, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '../NewTransactionModal'
import { DialogLogin } from '../DialogLogin'
import { useSession } from 'next-auth/react'
import { Fragment } from 'react'
import { GoogleLogo } from 'phosphor-react'

export const Header = () => {
  const { status, data: session } = useSession();

  const isAuthenticated = status === "authenticated"

  const RatingWrapper = isAuthenticated ? Fragment : DialogLogin

  return (
    <HeaderContainer>
      <HeaderContent>
        <Login>
          <span>
            <RatingWrapper>
              <h3>
                <GoogleLogo size={30} color="#fff" />
                Criar conta com o Google
              </h3>
            </RatingWrapper>
          </span>
        </Login>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}