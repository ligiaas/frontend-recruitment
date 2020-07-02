import React from 'react'
import PropTypes from 'prop-types'
import { StyledPrice } from '../StyledPrice'

const Price = ({ children, color, size }) => {
  
  return (
    <StyledPrice color={color} size={size}>
      {children}
    </StyledPrice>
  )
}

Price.default = {
  color: '#313135',
  size: '20px'
}

Price.Proptype = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
}

export default Price
