import React from 'react';
import PropTypes from 'prop-types'
import { StyledBagButton } from '../ui/StyledBagButton';
import { StyledIcon } from '../ui/StyledIcon';
import Paragraph from '../components/Paragraph'
import IconBag from '../assets/bag.svg'

const BagButton = ({ open, setOpen }) => {
  return (
    <StyledBagButton open={open} onClick={() => setOpen(!open)}>
      {
        open ? <Paragraph color="#fff" size={20}>X</Paragraph>
        : <StyledIcon height={20} margin={0} src={IconBag} width={35} />
      }
    </StyledBagButton>
  )
}

BagButton.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

export default BagButton;