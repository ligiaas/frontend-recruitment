import React from 'react';
import PropTypes from 'prop-types'
import { StyledBagButton } from '../ui/StyledBagButton';
import { StyledIcon } from '../ui/StyledIcon';

const BagButton = ({ open, setOpen }) => {
  return (
    <StyledBagButton open={open} onClick={() => setOpen(!open)}>
      <StyledIcon bgcolor="#dfbd00" height={30} margin={10} width={30} />
    </StyledBagButton>
  )
}

BagButton.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

export default BagButton;