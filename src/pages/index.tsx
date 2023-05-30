'use client'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import SessionWrapper from '@/components/auth/SessionWrapper'
import Welcome from '@/components/main/Welcome'
import useSWR from 'swr'
import { useRecoilState } from 'recoil'
import { userState } from '@/utils/atoms'
import MainButton from '@/components/MainButton'
import { fetcher } from '@/utils/hooks'

export default function Home() {
  const [user, setUser] = useRecoilState(userState)
  const { data, error } = useSWR('/api/me', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  setUser(data)
  return (
    <SessionWrapper>
      <Welcome />
    </SessionWrapper>
  )
}
// <MainButton onClick={() => signOut()}>Sign out</MainButton>
