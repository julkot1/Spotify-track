import { NextApiRequest, NextApiResponse } from 'next'
import {
  fetchSpotifyGET,
  getAlbum,
  getArtist,
  getTrack,
} from '@/utils/fetchSpotify'
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    const token = ((session as any).user as any)['access_token']
    const term = req.query.term || 'short_term'

    const data = await fetchSpotifyGET(
      `https://api.spotify.com/v1/me/top/artists?time_range=${term}`,
      token
    )
    if (data == null) {
      res.status(401)
      res.send({ error: 'Not sign in' })
    }
    res.send(data.items.map((x: any) => getArtist(x)))
  } else {
    res.send({
      error:
        'You must be signed in to view the protected content on this page.',
    })
  }
}
