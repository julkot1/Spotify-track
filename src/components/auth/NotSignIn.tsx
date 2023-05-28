import React, { FunctionComponent } from 'react'
import AuthWrapper from './AuthWrapper'
import MainButton from '../MainButton'
import { signIn } from 'next-auth/react'
type Props = {}
const NotSignIn: FunctionComponent<Props> = ({}) => {
  return (
    <AuthWrapper>
      <h1>Not signed in </h1>
      <MainButton onClick={() => signIn()}>Sign in</MainButton>
    </AuthWrapper>
  )
}
export default NotSignIn
