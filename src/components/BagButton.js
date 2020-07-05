import React from 'react';
import { StyledBagButton } from './StyledBagButton';

const BagButton = ({ children, open, setOpen }) => {
  return (
    <StyledBagButton open={open} onClick={() => setOpen(!open)}>
      {children}
    </StyledBagButton>
  )
}

export default BagButton;