import colors from '@/utils/colors'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { Roboto } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    background-color: ${colors.background};
    width: 100vw;
    height: 100vh;
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
      <Component {...pageProps} />
    </SessionProvider>
  )
}
