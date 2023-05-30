import colors from '@/utils/colors'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { Roboto } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const GlobalStyles = createGlobalStyle`
html,
body {
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
    background-color: ${colors.background};
    width: 100vw;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
`

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}
