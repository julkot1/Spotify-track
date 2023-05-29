import { log } from 'console'
import NextAuth, { Account, Session, User } from 'next-auth'

import SpotifyProvider from 'next-auth/providers/spotify'
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_ID || 'null',
      clientSecret: process.env.SPOTIFY_SECRET || 'null',
      authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-email%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20app-remote-control%20streaming%20user-library-modify%20user-library-read',
    }),
  ],
  pages: { signIn: '/auth/signin' },
  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        token['refresh_token'] = account.refresh_token
        token['access_token'] = account.access_token
      }

      return token
    },
    async session({ session, token, user }: any) {
      session['user'] = token

      return session
    },
  },
}
export default NextAuth(authOptions)
