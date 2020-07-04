import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../../store/store';
import PropTypes from 'prop-types'
import { StyledGrid } from '../StyledGrid'
import { StyledImage } from '../StyledImage'
import { StyledBar } from '../StyledBar'
import { StyledParagraph } from '../StyledParagraph'
import { StyledPrice } from '../StyledPrice'
import Product from './Product'
import Camisa from '../../assets/camisa-listra-pb.jpg'

const Grid = () => {

  const products = useSelector(
    state => state.products,
    products => products,
  );
  
  const loading = useSelector(
    state => state.loading,
    loading => loading,
  );
  
  const error = useSelector(
    state => state.error,
    error => error,
  );
  
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  if (loading) {
    return (<StyledParagraph>loading...</StyledParagraph>)
  }
  
  if (error) {
    return (<StyledParagraph>ooops!</StyledParagraph>)
  }
  
  return (
    <StyledGrid>
      {
        products.map(item => (
          <Product key={item.id}>
            <StyledImage atl={item.title} src={Camisa} />
            <StyledParagraph align='center'>{item.title}</StyledParagraph>
            <StyledBar color='#dfbd00' height='13px' width='25px'></StyledBar>
            <StyledParagraph align='center'>
              R$ <StyledPrice>{item.price}</StyledPrice>
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
