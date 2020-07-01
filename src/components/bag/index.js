import React from 'react'
import useWindowSize from '../../utils/use-window-size'
import Header from '../header'
import { StyledBag } from './bag.styled'

const Bag = () => {
  const screen = useWindowSize()
  const size = screen.width - (screen.width * 0.20)
  console.log(screen)
  return (
    <StyledBag width={`${size}px`}>
      <Header number={0} />
    </StyledBag>
  )
}

export default Bag
