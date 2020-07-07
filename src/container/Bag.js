import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bagListProduct, bagRemoveProduct } from '../store/actions';
import Proptypes from 'prop-types';
import useWindowSize from '../utils/use-window-size';
import Header from '../components/Header';
import { StyledBag } from '../ui/StyledBag';
import { StyledBagSubTotal, StyledSubTotalValue } from '../ui/StyledBagSubTotal';
import { StyledButton } from '../ui/StyledButton';
import BagItem from '../components/BagItem'
import Paragraph from '../components/Paragraph';

const Bag = ({ open }) => {
  const screen = useWindowSize()
  const widthSize = screen.width - (screen.width * 0.4)
  const [delected, setDelected] = useState(false)

  const products = useSelector(state => state.bag.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(bagListProduct())
  }, [dispatch])

  const deleteProduct = product => {
    setDelected(true)
    dispatch(bagRemoveProduct(product))
  }

  const getTotal = () => {
    const itemValue = products.map(item => (
      item.product.price * item.amount
    ))
    return itemValue.reduce((amount, value) => amount + value, 0).toFixed(2)
  }

  const parcelTotal = () => {
    const parcel = getTotal() / 10
    return parcel.toFixed(2)
  }

  return (
    <StyledBag open={open} height={screen.height} width={open ? widthSize : 0}>
      <Header counter={products.length} />
      {
        products && products.map((item, index) => (
          <BagItem
            key={index}
            onClick={() => deleteProduct(item)}
            remove={delected}
            request={item}
          />
        ))
      }
      <StyledBagSubTotal>
        <Paragraph
          color="rgba(255, 255, 255, 0.4)"
          size={18}
          transform="uppercase"
        >
          subtotal
        </Paragraph>
        <StyledSubTotalValue>
          <Paragraph
            color="#dfbd00"
            size={28}
            transform="uppercase"
          >
            r$ {getTotal()}
          </Paragraph>
          <Paragraph
            color="rgba(255, 255, 255, 0.2)"
            size={12}
            transform="uppercase"
          >
            ou em até 10 x {parcelTotal()}
          </Paragraph>
        </StyledSubTotalValue>
      </StyledBagSubTotal>
      <StyledButton
        bgcolor="#000"
        radius={2}
        boxshadow="0px 2px 0px 0px rgba(0, 0, 0, 0.2)"
        color="#fff"
        hvcolor="#dfbd00"
        padding="10px 0"
        width="100%"
      >
        <Paragraph align="center" transform="uppercase">comprar</Paragraph>
      </StyledButton>
    </StyledBag>
  )
}

Bag.propTypes = {
  open: Proptypes.bool.isRequired
}

export default Bag
