import React from 'react'
import { StyledHeader, StyledTitle } from './header.styled'
import Logo from '../../assets/bag.svg'

const Header = () => {
  return (
      <StyledHeader>
        <img src={Logo} alt=""/>
        <StyledTitle>sacola</StyledTitle>
      </StyledHeader>
  )
}

export default Header