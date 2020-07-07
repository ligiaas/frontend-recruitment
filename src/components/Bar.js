import React from 'react';

import PropTypes from 'prop-types';

import { StyledBar } from '../ui/StyledBar';

const Bar = ({ color, height, width }) => {

  return (
    <StyledBar color={color} height={height} width={width} />
  );
};

Bar.propTypes = {
  color: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

export default Bar;
