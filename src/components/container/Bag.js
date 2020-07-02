import React from 'react'
import useWindowSize from '../../utils/use-window-size'
import { StyledHeader } from '../StyledHeader'
import { StyledBag } from '../StyledBag'

const Bag = () => {
  const screen = useWindowSize()
  const size = screen.width - (screen.width * 0.20)
  return (
    <StyledBag width={`${size}px`}>
      <StyledHeader number={0} />
    </StyledBag>
  )
}

export default Bag
