import React from 'react';

import PropTypes from 'prop-types';

import { StyledParagraph } from '../ui/StyledParagraph';

const Paragraph = ({ align, children, color, decoration, size, transform }) => {
  return (
    <StyledParagraph
      align={align}
      color={color}
      decoration={decoration}
      size={size}
      transform={transform}
    >
      {children}
    </StyledParagraph>
  );
};

Paragraph.default = {
  align: 'left',
  color: '#313135',
  decoration: 'none',
  size: 16,
  transform: 'none'
};

Paragraph.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  decoration: PropTypes.string,
  size: PropTypes.number,
  transform: PropTypes.string
};

export default Paragraph;
