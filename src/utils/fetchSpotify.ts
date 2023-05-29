import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import {
  Album,
  AlbumTrack,
  Image,
  Me,
  Track,
  TrackAlbum,
  TrackArtist,
} from './spotifyTypes'

const fetchSpotifyGET = async (url: string, token: string) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  console.log(res.status)
  console.log(token)

  if (!res.ok) return null
  return res.json()
}

const getUser = (raw: any): Me => {
  return {
    display_name: raw.display_name,
    email: raw.email,
    followers: raw.followers.total,
    url: raw.href,
    images: raw.images as Image[],
    id: raw.id,
  }
}

const getTrackArtist = (raw: any): TrackArtist => {
  return {
    name: raw.name,
    id: raw.id,
  }
}
const getTrackAlbum = (raw: any): TrackAlbum => {
  return {
    name: raw.name,
    id: raw.id,
    images: raw.images as Image[],
    artists: raw.artists.map((x: any) => getTrackArtist(x)),
  }
}

const getTrack = (raw: any): Track => {
  return {
    id: raw.id,
    name: raw.name,
    popularity: raw.popularity,
    url: raw.href,
    duration: raw.duration_ms,
    album: getTrackAlbum(raw.album),
    artists: raw.artists.map((x: any) => getTrackArtist(x)),
  }
}

const getAlbumTrack = (raw: any): AlbumTrack => {
  return {
    id: raw.id,
    name: raw.name,
    popularity: raw.popularity,
    duration: raw.duration_ms,
    artists: raw.artists.map((x: any) => getTrackArtist(x)),
  }
}
const getAlbum = (raw: any): Album => {
  return {
    id: raw.id,
    name: raw.name,
    popularity: raw.popularity,
    artists: raw.artists.map((x: any) => getTrackArtist(x)),
    release_date: raw.release_date,
    tracks: raw.tracks.items.map((x: any) => getAlbumTrack(x)),
    tracks_next: raw.tracks.next,
  }
}
export {
  fetchSpotifyGET,
  getUser,
  getTrack,
  getTrackAlbum,
  getTrackArtist,
  getAlbum,
  getAlbumTrack,
}
