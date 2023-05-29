interface Image {
  height: null | number
  width: null | number
  url: string
}
interface Me {
  display_name: string
  email: string
  followers: number
  id: string
  images: Image[]
  url: string
}
interface TrackArtist {
  name: string
  id: string
}
interface TrackAlbum {
  name: string
  id: string
  images: Image[]
  artists: TrackArtist[]
}
interface Track {
  id: string
  name: string
  popularity: number
  url: string
  duration: number
  album: TrackAlbum
  artists: TrackArtist[]
}
interface AlbumTrack {
  id: string
  name: string
  popularity: number
  duration: number
  artists: TrackArtist[]
}
interface Album {
  id: string
  name: string
  artists: TrackArtist[]
  tracks: AlbumTrack[]
  release_date: string
  tracks_next: null | string
  popularity: number
}
export type { Me, Image, Track, TrackAlbum, TrackArtist, Album, AlbumTrack }
