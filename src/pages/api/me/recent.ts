import { NextApiRequest, NextApiResponse } from 'next'
import { fetchSpotifyGET, getTrack } from '@/utils/fetchSpotify'
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    const token = ((session as any).user as any)['access_token']

    const data = await fetchSpotifyGET(
      `https://api.spotify.com/v1/me/player/recently-played`,
      token
    )
    if (data == null) {
      res.status(401)
      res.send({ error: 'Not sign in' })
    }
    res.send(data.items.map((x: any) => x.track).map((x: any) => getTrack(x)))
  } else {
    res.send({
      error:
        'You must be signed in to view the protected content on this page.',
    })
  }
}
