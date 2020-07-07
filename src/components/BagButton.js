import React from 'react';

import PropTypes from 'prop-types';

import { StyledBagButton } from '../ui/StyledBagButton';
import { StyledIcon } from '../ui/StyledIcon';

import IconBag from '../assets/bag.svg';
import IconX from '../assets/x.png';

const BagButton = ({ open, onClick }) => {
  return (
    <StyledBagButton open={open} onClick={() => onClick(!open)}>
      {
        open ?  <StyledIcon height={15} margin={0} src={IconX} width={15} />
        : <StyledIcon height={20} margin={0} src={IconBag} width={35} />
      }
    </StyledBagButton>
  );
};

BagButton.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default BagButton;