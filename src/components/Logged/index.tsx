import { Avatar, LoginContainer } from './styles'
import { SignOut } from 'phosphor-react'
import { signOut, useSession } from 'next-auth/react'

export const LoginDialog = () => {
  const { data: session } = useSession()

  const user = session?.user

  return (
    <LoginContainer>
      <div>
        <Avatar
          src={user?.avatar_url}
          alt={user?.name}
          width={80}
          height={80}
        />
      </div>
      <span>{user?.name}</span>
      <div>
        <SignOut color="#F75A68" size={20} onClick={() => signOut()} />
      </div>
    </LoginContainer>
  )
}
