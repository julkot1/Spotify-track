import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
type Props = { children: ReactNode }

const StyledWrapper = styled.div`
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
`
const WelcomeWrapper: FunctionComponent<Props> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}
export default WelcomeWrapper
