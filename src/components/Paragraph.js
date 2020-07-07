import React from 'react'
import PropTypes from 'prop-types'
import { StyledParagraph } from '../ui/StyledParagraph'

const Paragraph = ({ align, children, color, decoration, size }) => {
  return (
    <StyledParagraph align={align} color={color} size={size}>
      {children}
    </StyledParagraph>
  )
}

Paragraph.default = {
  align: 'left',
  color: '#313135',
  decoration: false,
  size: 16
}

Paragraph.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  decoration: PropTypes.bool,
  size: PropTypes.number
}

export default Paragraph
