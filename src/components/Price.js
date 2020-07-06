import React from 'react'
import PropTypes from 'prop-types'
import { StyledPrice } from '../ui/StyledPrice'

const Price = ({ value }) => {
  const str = value.toString()
  const int = str.split('.')

  return (
    <>
      <StyledPrice size={22} weight="bold">{int[0]}</StyledPrice>.
      <StyledPrice>{int[1]}</StyledPrice>
    </>
  )
}

Price.default = {
  size: 16
}

Price.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number
}

export default Price
