import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Paragraph from './Paragraph'
import { StyledProduct } from '../StyledProduct'
import { StyledButton } from '../StyledButton'
import { BodyModal, StyledSize } from '../StyledModal'
import Modal from './Modal'

const Product = ({ children, product }) => {

  const [showModal, updateShowModal] = useState(false)
  const [size, setSize] = useState('')
  const [amount, setAmount] = useState(0)
  const [itemBag, setItemBag] = useState({})

  const dispatch = useDispatch()

  const handleOpenModal = () => {
    updateShowModal(true)
  }

  const sendToBag = () => {
    console.log({size, product, amount})
    dispatch({
      type: 'BAG_ADD_PRODUCT',
      payload: {size, product, amount}
    })
    handleCloseModal()
    reset()
  }

  const reset = () => {
    setSize('')
    setAmount(0)
  }

  const handleCloseModal = () => {
    updateShowModal(false)
    reset()
  }

  return (
    <>
      <StyledProduct onClick={handleOpenModal}>
        {children}
      </StyledProduct>

      <Modal close={handleCloseModal} confirmationAction={sendToBag} openModal={showModal}>
        <Paragraph align="left" color="#fff">Escolha o tamanho</Paragraph>
        <BodyModal>
          {
            product.availableSizes.map((item, index) => (
              <StyledSize onClick={e => setSize(e.target.value)} key={index} type="button" value={item} />
            ))
          }
        </BodyModal>
        <Paragraph align="left" color="#fff">Quantidade</Paragraph>
        <BodyModal>
          <StyledButton color="#dfbd00" onClick={() => setAmount(amount <= 0 ? 0 : amount - 1)} type="button"  size="30px">-</StyledButton>
          <Paragraph color="#dfbd00" size="30px">{amount}</Paragraph>
          <StyledButton color="#dfbd00" onClick={() => setAmount(amount + 1)} type="button" size="30px">+</StyledButton>
        </BodyModal>
      </Modal>
    </>
  )
}

Product.Proptype = {
  children: PropTypes.node.isRequired,
  product: PropTypes.string.isRequired
}

export default Product
