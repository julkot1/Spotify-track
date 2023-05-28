import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/spotify'
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.SPOTIFY_ID || 'null',
      clientSecret: process.env.SPOTIFY_SECRET || 'null',
    }),
  ],
  pages: { signIn: '/auth/signin' },
}
export default NextAuth(authOptions)
