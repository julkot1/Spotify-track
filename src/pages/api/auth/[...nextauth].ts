import { log } from 'console'
import NextAuth, { Account, Session, User } from 'next-auth'

import SpotifyProvider from 'next-auth/providers/spotify'

async function refreshAccessToken(token: any) {
  try {
    const url =
      'https://accounts.spotify.com/api/token?' +
      new URLSearchParams({
        client_id: process.env.SPOTIFY_ID || '',
        client_secret: process.env.SPOTIFY_SECRET || '',
        grant_type: 'refresh_token',
        refresh_token: token.refresh_token,
      })
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    })

    const refreshedTokens = await response.json()

    if (!response.ok) {
      throw refreshedTokens
    }

    return {
      ...token,
      access_token: refreshedTokens.access_token,
      exp: Date.now() + refreshedTokens.expires_in * 1000,
      refresh_token: refreshedTokens.refresh_token ?? token.refreshToken,
    }
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_ID || 'null',
      clientSecret: process.env.SPOTIFY_SECRET || 'null',
      authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-email%20user-library-read%20user-read-private%20playlist-read-private%20user-top-read%20user-read-playback-state%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-position',
    }),
  ],
  pages: { signIn: '/auth/signin' },
  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        token['refresh_token'] = account.refresh_token
        token['access_token'] = account.access_token
      }

      if (Date.now() < token.exp) {
        return token
      }
      return refreshAccessToken(token)
    },
    async session({ session, token, user }: any) {
      session['user'] = token

      return session
    },
  },
}
export default NextAuth(authOptions)
