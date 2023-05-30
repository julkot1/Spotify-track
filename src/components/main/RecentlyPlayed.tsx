import colors from '@/utils/colors'
import { fetcher } from '@/utils/hooks'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import TrackInfo from '../track/TrackInfo'
type Props = {}
const StyledWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
`
const StyledContainer = styled.div`
  padding: 2rem;
`
const StyledTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
`
const RecentlyPlayed: FunctionComponent<Props> = ({}) => {
  const { data, error } = useSWR('/api/me/recent', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  console.log(data)

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledTitle>Recently played tracks</StyledTitle>
        {data.map((x: any) => (
          <TrackInfo data={x} />
        ))}
      </StyledContainer>
    </StyledWrapper>
  )
}
export default RecentlyPlayed
