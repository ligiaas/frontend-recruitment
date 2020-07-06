import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bagListProduct, bagRemoveProduct } from '../store/actions';
import Proptypes from 'prop-types';
import useWindowSize from '../utils/use-window-size';
import Header from '../components/Header';
import { StyledBag } from '../ui/StyledBag';
import Paragraph from '../components/Paragraph';

const Bag = ({ open }) => {

  const screen = useWindowSize()
  const widthSize = screen.width - (screen.width * 0.35)

  const products = useSelector(state => state.bag.products)
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(bagListProduct())
  }, [dispatch])

  if (loading) { return 'loading...' }

  if (error) { return 'ooops!' }

  const deleteProduct = product => {
    console.log(product)
    dispatch(bagRemoveProduct(product))
  }

  return (
    <StyledBag open={open} height={screen.height} width={open ? widthSize : 0}>
      <Header counter={products.length} />
      {
        products && products.map((item, index) => (
          <div key={index} onClick={() => deleteProduct(item)}>
            <Paragraph color="#fff">{item.product.title}</Paragraph>
            <Paragraph color="#fff">{item.size}</Paragraph>
            <Paragraph color="#fff">{item.amount}</Paragraph>
          </div>
        ))
      }
    </StyledBag>
  )
}

Bag.propTypes = {
  open: Proptypes.bool.isRequired
}

export default Bag
