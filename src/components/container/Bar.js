import React from 'react'
import PropTypes from 'prop-types'
import { StyledBar } from './bar.styled'

const Bar = ({ color, height, width }) => {

  return (
    <StyledBar color={color} height={height} width={width} />
  )
}

Bar.Proptype = {
  color: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
}

export default Bar
