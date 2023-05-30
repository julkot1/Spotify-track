import React, { FunctionComponent } from 'react'
import WelcomeWrapper from './WelcomeWrapper'
import HiBanner from './HiBanner'
import { MotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import RecentlyPlayed from './RecentlyPlayed'
type Props = {}

const Welcome: FunctionComponent<Props> = ({}) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <WelcomeWrapper>
      <HiBanner />
      <RecentlyPlayed />
    </WelcomeWrapper>
  )
}
export default Welcome
