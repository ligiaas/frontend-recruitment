import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeader, StyledHeaderIcon, StyledTitle, StyledCounter } from '../ui/StyledHeader'

const Header = ({counter}) => {
  return (
      <StyledHeader>
        <StyledHeaderIcon>
          {
            counter > 0 &&
            <StyledCounter>
              <span>{counter}</span>
            </StyledCounter>
          }
        </StyledHeaderIcon>
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