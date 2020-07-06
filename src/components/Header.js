import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeader, StyledTitle, StyledCounter } from '../ui/StyledHeader'
import { StyledIcon } from '../ui/StyledIcon'
import IconBag from '../assets/bag.svg'

const Header = ({counter}) => {
  return (
      <StyledHeader>
        <StyledIcon height={40} margin={25} src={IconBag} width={33} />
        {
          counter > 0 &&
          <StyledCounter>
            <span>{counter}</span>
          </StyledCounter>
        }
        <StyledTitle>sacola</StyledTitle>
      </StyledHeader>
  )
}

Header.default = {
  counter: 0
};

Header.propTypes = {
  counter: PropTypes.number,
};

export default Header