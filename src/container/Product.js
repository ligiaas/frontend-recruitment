import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Paragraph from '../components/Paragraph'
import { StyledProduct } from '../ui/StyledProduct'
import { StyledButton } from '../ui/StyledButton'
import { BodyModal, StyledSize } from '../ui/StyledModal'
import Modal from '../components/Modal'

const Product = ({ children, product }) => {

  const [showModal, updateShowModal] = useState(false)
  const [size, setSize] = useState('')
  const [amount, setAmount] = useState(1)

  const dispatch = useDispatch()

  const handleOpenModal = () => {
    updateShowModal(true)
  }

  const sendToBag = () => {
    if (size && amount >= 1) {
      dispatch({
        type: 'BAG_ADD_PRODUCT',
        payload: {size, product, amount}
      })
      handleCloseModal()
      reset()
    }
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
          <Paragraph color="#dfbd00" size={30}>{amount}</Paragraph>
          <StyledButton color="#dfbd00" onClick={() => setAmount(amount + 1)} type="button" size="30px">+</StyledButton>
        </BodyModal>
      </Modal>
    </>
  )
}

Product.propTypes = {
  children: PropTypes.node.isRequired,
  product: PropTypes.object.isRequired
}

export default Product
