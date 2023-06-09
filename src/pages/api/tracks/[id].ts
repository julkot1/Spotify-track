import { NextApiRequest, NextApiResponse } from 'next'
import { fetchSpotifyGET, getTrack } from '@/utils/fetchSpotify'
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    const token = ((session as any).user as any)['access_token']
    const id = req.query.id

    const data = await fetchSpotifyGET(
      `https://api.spotify.com/v1/tracks/${id}`,
      token
    )
    if (data == null) {
      res.status(401)
      res.send({ error: 'Not sign in' })
    }
    res.send(getTrack(data))
  } else {
    res.send({
      error:
        'You must be signed in to view the protected content on this page.',
    })
  }
}
