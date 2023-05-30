import styled from 'styled-components'
import { useSession, signIn, signOut } from 'next-auth/react'
import MainButton from '@/components/MainButton'
import { ReactNode } from 'react'
import NotSignIn from './NotSignIn'
import { userState } from '@/utils/atoms'
import { useRecoilState } from 'recoil'
import { GetStaticProps } from 'next'
import { Me } from '@/utils/spotifyTypes'
import { getUser } from '@/utils/fetchSpotify'
type Props = {
  children: ReactNode
}
export default function SessionWrapper({ children }: Props) {
  const { data: session } = useSession()
  if (session) {
    //const [user, setUser] = useRecoilState(userState)

    return <>{children}</>
  }

  return <NotSignIn />
}
