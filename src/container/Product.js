import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import Paragraph from '../components/Paragraph'
import Modal from '../components/Modal'
import Price from '../components/Price'

import { StyledImage } from '../ui/StyledImage'
import { StyledBar } from '../ui/StyledBar'
import { StyledProduct } from '../ui/StyledProduct'
import { StyledButton } from '../ui/StyledButton'
import { BodyModal, StyledSize } from '../ui/StyledModal'
import { images }from '../utils/images'

const Product = ({ product }) => {

  const [showModal, updateShowModal] = useState(false)
  const [size, setSize] = useState('')
  const [request, setRequest] = useState({})
  const [amount, setAmount] = useState(1)

  const dispatch = useDispatch()

  const handleOpenModal = () => {
    updateShowModal(true)
  }

  const sendToBag = () => {
    setRequest({size, product, amount, image: images[product.id]})
    if (size && amount >= 1) {
      dispatch({
        type: 'BAG_ADD_PRODUCT',
        payload: {size, product, amount, image: images[product.id]}
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
        <StyledImage alt={product.title} height={230} src={images[product.id]} width={180} />
        <Paragraph align='center'>{product.title}</Paragraph>
        <StyledBar color='#dfbd00' height='3px' width='15px'></StyledBar>
        <Paragraph align='center'>
          R$ <Price value={product.price} />
        </Paragraph>
        { product.installments > 0 &&
          <Paragraph color="#95959d">ou {product.installments} x R$ {(product.price % product.installments).toFixed(2)}</Paragraph>
        }
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
  product: PropTypes.object.isRequired
}

export default Product
