import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bagListProduct, bagRemoveProduct } from '../../store/actions';
import useWindowSize from '../../utils/use-window-size'
import Header from './Header'
import { StyledBag } from '../StyledBag'
import Paragraph from './Paragraph';

const Bag = ({ open }) => {

  const screen = useWindowSize()
  const size = screen.width - (screen.width * 0.20)

  const products = useSelector(state => state.bag.products)
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(bagListProduct())
  }, [dispatch])

  if (loading) { return 'loading...' }

  if (error) { return 'ooops!' }

  const deleteProduct = id => {
    console.log(id)
    dispatch(bagRemoveProduct(id))
  }

  return (
    <StyledBag open={open} width={`${size}px`}>
      <Header counter={products.length} />
      {
        products && products.map((item, index) => (
          <div key={index} onClick={() => deleteProduct(index)} style={{outline: '1px solid #dfbd00'}}>
            <Paragraph color="#fff">{item.product.title}</Paragraph>
            <Paragraph color="#fff">{item.size}</Paragraph>
            <Paragraph color="#fff">{item.amount}</Paragraph>
          </div>
        ))
      }
    </StyledBag>
  )
}

export default Bag
