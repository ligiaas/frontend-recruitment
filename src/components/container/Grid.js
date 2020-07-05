import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/actions'
import { StyledGrid } from '../StyledGrid'
import { StyledImage } from '../StyledImage'
import { StyledBar } from '../StyledBar'
import { StyledParagraph } from '../StyledParagraph'
import Price from './Price'
import Product from './Product'
import Camisa from '../../assets/camisa-1.jpg'

const Grid = () => {
  const products = useSelector(state => state.products.products);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) { return 'loading...' }

  if (error) { return 'ooops!' }

  return (
    <StyledGrid>
      {

        products.map(item => (
          <Product key={item.id} product={item}>
            <StyledImage atl={item.title} src={Camisa} />
            <StyledParagraph align='center'>{item.title}</StyledParagraph>
            <StyledBar color='#dfbd00' height='3px' width='15px'></StyledBar>
            <StyledParagraph align='center'>
              R$ <Price value={item.price} />
            </StyledParagraph>
          </Product>
        ))
      }
    </StyledGrid>
  )
}

Grid.default = {
  image: 'Imagem não disponível'
}

Grid.propType = {
  image: PropTypes.string,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Grid
