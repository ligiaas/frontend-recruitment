import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/actions'
import { StyledGrid } from '../ui/StyledGrid'
import { StyledImage } from '../ui/StyledImage'
import { StyledBar } from '../ui/StyledBar'
import { StyledParagraph } from '../ui/StyledParagraph'
import Price from '../components/Price'
import Product from './Product'
import Camisa from '../assets/camisa-1.jpg'

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
    <div>
      <StyledGrid id="grid">
        {

          products.map(item => (
            <Product key={item.id} product={item}>
              <StyledImage atl={item.title} src={Camisa} />
              <StyledParagraph align='center'>{item.title}</StyledParagraph>
              <StyledBar color='#dfbd00' height='3px' width='15px'></StyledBar>
              <StyledParagraph align='center'>
                R$ <Price value={item.price} />
              </StyledParagraph>
              { item.installments > 0 &&
                <StyledParagraph>ou {item.installments} x R$ {(item.price % item.installments).toFixed(2)}</StyledParagraph>
              }
            </Product>
          ))
        }
      </StyledGrid>
    </div>
  )
}

export default Grid
