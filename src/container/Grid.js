import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/actions'
import PropTypes from 'prop-types'
import { StyledGrid } from '../ui/StyledGrid'
import Paragraph from '../components/Paragraph'
import Product from './Product'

const Grid = ({ setOpen }) => {
  const products = useSelector(state => state.products.products);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <StyledGrid onMouseOver={() => setOpen(false)}>
        {
          error && ( <Paragraph>Oooops!</Paragraph> )
        }
        {
          loading && ( <Paragraph>Loading...</Paragraph> )
        }
        {
          products && products.map(item => (
            <Product key={item.id} product={item} />
          ))
        }
      </StyledGrid>
    </div>
  )
}

Grid.propTypes = {
  setOpen: PropTypes.func.isRequired
}

export default Grid
