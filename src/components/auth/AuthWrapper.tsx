import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
type Props = { children: ReactNode }

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const AuthWrapper: FunctionComponent<Props> = ({ children }: Props) => {
  return <StyledWrapper>{children}</StyledWrapper>
}
export default AuthWrapper
