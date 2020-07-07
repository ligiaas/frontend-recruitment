import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions';

import PropTypes from 'prop-types';

import Product from './Product';

import { StyledGrid } from '../ui/StyledGrid';

const Grid = ({ setOpen }) => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <StyledGrid onMouseOver={() => setOpen(false)}>
      {
        products && products.map(item => (
          <Product key={item.id} product={item} />
        ))
      }
    </StyledGrid>
  )
};

Grid.propTypes = {
  setOpen: PropTypes.func.isRequired
};

export default Grid;
