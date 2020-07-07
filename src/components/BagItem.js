import React, { useState } from 'react'
import Proptypes from 'prop-types'
import Paragraph from '../components/Paragraph'
import {
  StyledBagItem,
  StyledItemButton,
  StyledItemImage,
  StyledBagProduct,
  StyledBagValue
} from '../ui/StyledBagItem';
import { StyledIcon } from '../ui/StyledIcon';
import IconX from '../assets/x.png'
import IconXBlack from '../assets/xblack.png'

const BagItem = ({ onClick, request, remove }) => {
  const [iconBtn, updateIconBtn] = useState(false)
  return (
    <StyledBagItem onMouseOver={() => updateIconBtn(true)} onMouseLeave={() => updateIconBtn(false)}>
      <StyledItemImage
        alt={request.product.title}
        height={70}
        src={request.image}
        width={60}
      />
      <StyledBagProduct>
        <Paragraph color="#fff" decoration={remove}>{request.product.title}</Paragraph>
        <Paragraph color="#fff" decoration={remove}>{request.product.description}</Paragraph>
        <Paragraph color="rgb(153, 153, 153)" decoration={remove} size={14}>{request.size} | {request.product.style}</Paragraph>
        <Paragraph color="rgb(153, 153, 153)" decoration={remove} size={14}>Quantidade: {request.amount}</Paragraph>
      </StyledBagProduct>
      <StyledBagValue>
        <StyledItemButton onClick={() => onClick(remove)}>
          <StyledIcon
            height={15}
            margin={0}
            src={iconBtn ? IconX : IconXBlack}
            width={15}
          />
        </StyledItemButton>
        <Paragraph color="#dfbd00" size={23} decoration={remove}>R$ {request.product.price}</Paragraph>
      </StyledBagValue>
    </StyledBagItem>
  )
}

BagItem.default = {
  remove: false
}

BagItem.propTypes = {
  onClick: Proptypes.func.isRequired,
  remove: Proptypes.bool,
  request: Proptypes.object.isRequired
}

export default BagItem
