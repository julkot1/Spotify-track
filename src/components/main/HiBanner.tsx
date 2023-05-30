import { userState } from '@/utils/atoms'
import { Me } from '@/utils/spotifyTypes'
import { motion, useScroll } from 'framer-motion'
import React, { FunctionComponent, useRef } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
type Props = {}

const StyledHeader = styled(motion.h1)`
  margin: 0;
  padding: 0;
  font-size: 5rem;
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`
const StyledWrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const HiBanner: FunctionComponent<Props> = ({}) => {
  const [user, setUser] = useRecoilState(userState)

  return (
    <StyledWrapper>
      <StyledHeader
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, bounce: 0.4, type: 'spring' }}
      >
        Hi 👋 {(user as Me).id}
      </StyledHeader>
    </StyledWrapper>
  )
}
export default HiBanner
