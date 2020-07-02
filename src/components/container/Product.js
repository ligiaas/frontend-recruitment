import React from 'react'
import PropTypes from 'prop-types'
import { StyledProduct } from '../StyledProduct'

const Product = ({ children, product }) => {

  const selectSize = () => {
    console.log('selecione o tamanho', product)
  }

  return (
    <StyledProduct onClick={selectSize}>
      {children}
    </StyledProduct>
  )
}

Product.Proptype = {
  children: PropTypes.node.isRequired,
  product: PropTypes.string.isRequired
}

export default Product
