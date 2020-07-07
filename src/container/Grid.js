import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/actions'
import PropTypes from 'prop-types'
import Notification from '../components/Notification'
import { StyledGrid } from '../ui/StyledGrid'
import Product from './Product'

const Grid = ({ setOpen }) => {
  const [notify, setNotify] = useState({})
  const products = useSelector(state => state.products.products);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const success = useSelector(state => state.success);

  if (loading) {
    setNotify({
      type: 'INFO',
      message: 'Carregando...'
    })
  }

  if (error) {
    setNotify({
      type: 'WARN',
      message: 'Oooops!'
    })
  }

  if (success) {
    setNotify({
      type: 'SUCCESS',
      message: 'Ação realizada com sucesso!'
    })
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <StyledGrid onMouseOver={() => setOpen(false)}>
        {
          products && products.map(item => (
            <Product key={item.id} product={item} />
          ))
        }
        <Notification type={notify.type}>{notify.message}</Notification>
      </StyledGrid>
    </div>
  )
}

Grid.propTypes = {
  setOpen: PropTypes.func.isRequired
}

export default Grid
