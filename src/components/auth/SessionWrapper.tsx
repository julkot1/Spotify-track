import styled from 'styled-components'
import { useSession, signIn, signOut } from 'next-auth/react'
import MainButton from '@/components/MainButton'
import { ReactNode } from 'react'
import NotSignIn from './NotSignIn'
type Props = {
  children: ReactNode
}
export default function SessionWrapper({ children }: Props) {
  const { data: session } = useSession()
  if (session) {
    return <>{children}</>
  }

  return <NotSignIn />
}
