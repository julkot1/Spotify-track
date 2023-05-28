'use client'
import styled from 'styled-components'
import { useSession, signIn, signOut } from 'next-auth/react'
import MainButton from '@/components/MainButton'
import { Session } from 'inspector'
import SessionWrapper from '@/components/auth/SessionWrapper'

export default function Home() {
  const { data: session } = useSession()

  return (
    <SessionWrapper>
      Signed in as {session?.user?.email} <br />
      <MainButton onClick={() => signOut()}>Sign out</MainButton>
    </SessionWrapper>
  )
}
