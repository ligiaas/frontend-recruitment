import {
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  ADD_TOBAG,
  REMOVE_TOBAG } from './constants'

// import { getProductsApi } from 'http/';

export function fetchProducts() {
  return function(dispatch) {
    dispatch({
      type: FETCH_PRODUCTS_REQUESTED
    })
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data.products
      }))
      .catch(error => dispatch({
        type: FETCH_PRODUCTS_FAILED,
        payload: error
      }))
  }
}