import colors from '@/utils/colors'
import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
type Props = {
  children: ReactNode
  onClick: Function
}
const StyledButton = styled.button`
  border: none;
  border-radius: 20px;
  outline: none;
  background-color: ${colors.backgroundSecond};
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${colors.secondary};
    transform: scale(0.95);
  }
`

const MainButton: FunctionComponent<Props> = ({ children, onClick }: Props) => {
  return <StyledButton onClick={() => onClick()}>{children}</StyledButton>
}
export default MainButton
