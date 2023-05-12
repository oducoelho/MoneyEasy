import { Avatar, HeaderContainer, HeaderContent, Logged, Login, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import { DialogLogin } from '../DialogLogin'
import { signOut, useSession } from 'next-auth/react'
import { Fragment } from 'react'
import { GoogleLogo, SignOut } from 'phosphor-react'
import { LoginDialog } from '../Logged'
import { NewTransactionModal } from '../NewTransactionModal'

export const Header = () => {
  const { status, data: session } = useSession();

  const isAuthenticated = status === "authenticated"

  const RatingWrapper = isAuthenticated ? Fragment : DialogLogin

  const user = session?.user;

  return (
    <HeaderContainer>
      <HeaderContent>
        {
          !user
          ?
          (
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
          )
          :
          (
            <LoginDialog />
          )
        }

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