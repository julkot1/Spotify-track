import colors from '@/utils/colors'
import { Track } from '@/utils/spotifyTypes'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
type Props = {
  data: Track
}
const TrackWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.backgroundSecond};
  margin: 2rem 0;
  padding: 1rem;
  border-radius: 20px;
`
const InfoWrapper = styled.div`
  margin-left: 2rem;
`
const TrackInfo: FunctionComponent<Props> = ({ data }) => {
  return (
    <TrackWrapper>
      <img src={data.album.images[0].url} width={100} height={100} />
      <InfoWrapper>
        <p>name: {data.name}</p>
        <p>album: {data.album.name}</p>
        <p>artist: {data.artists.map((x) => x.name).join(', ')}</p>
      </InfoWrapper>
    </TrackWrapper>
  )
}
export default TrackInfo
