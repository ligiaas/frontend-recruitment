import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeader, StyledIcon, StyledTitle, StyledCounter } from '../StyledHeader'

const Header = ({counter}) => {
  return (
      <StyledHeader>
        <StyledIcon>
          {
            counter > 0 && 
            <StyledCounter>
              <span>{counter}</span>
            </StyledCounter>
          }
        </StyledIcon>
        <StyledTitle>sacola</StyledTitle>
      </StyledHeader>
  )
}

Header.default = {
  counter: 0
};

Header.propType = {
  counter: PropTypes.number,
};

export default Header