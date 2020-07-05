import React from 'react'
import PropTypes from 'prop-types'
import { StyledPrice } from '../StyledPrice'

const Price = ({ color, value }) => {
  const str = value.toString()
  const int = str.split('.')

  return (
    <>
      <StyledPrice color={color} size="22px" weight="bold">{int[0]}</StyledPrice>.
      <StyledPrice>{int[1]}</StyledPrice>
    </>
  )
}

Price.default = {
  color: '#313135',
  size: '16px',
  weight: 'normal'
}

Price.Proptype = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
}

export default Price
