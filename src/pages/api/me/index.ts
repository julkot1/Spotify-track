import { NextApiRequest, NextApiResponse } from 'next'
import { fetchSpotifyGET, getUser } from '@/utils/fetchSpotify'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { log } from 'console'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    log(session)
    const token = ((session as any).user as any)['access_token']
    const data = await fetchSpotifyGET('https://api.spotify.com/v1/me', token)
    if (data == null) {
      res.status(401)
      res.send({ error: 'Not sign in' })
    }
    res.send(getUser(data))
  } else {
    res.send({
      error:
        'You must be signed in to view the protected content on this page.',
    })
  }
}
