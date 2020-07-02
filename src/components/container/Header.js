import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeader, StyledLogo, StyledTitle, StyledCounter } from '../StyledHeader'

const Header = ({number}) => {
  return (
      <StyledHeader>
        <StyledLogo>
          {
            number > 0 && 
            <StyledCounter>
              <span>{number}</span>
            </StyledCounter>
          }
        </StyledLogo>
        <StyledTitle>sacola</StyledTitle>
      </StyledHeader>
  )
}

Header.default = {
  number: 0
};

Header.propType = {
  number: PropTypes.number,
};

export default Header