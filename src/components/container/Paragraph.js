import React from 'react'
import PropTypes from 'prop-types'
import { StyledParagraph } from '../StyledParagraph'

const Paragraph = ({ align, children, color, size }) => {
  return (
    <StyledParagraph align={align} color={color} size={size}>
      {children}
    </StyledParagraph>
  )
}

Paragraph.default = {
  align: 'left',
  color: '#313135',
  size: '16px'
}

Paragraph.Proptype = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
}

export default Paragraph
