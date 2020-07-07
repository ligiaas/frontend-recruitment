import {
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,

  BAG_ADD_PRODUCT,
  BAG_LIST_PRODUCT,
  BAG_REMOVE_PRODUCT } from './constants'

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

export const bagAddProduct = payload => ({
  type: BAG_ADD_PRODUCT,
  payload
})

export const bagRemoveProduct = payload => ({
  type: BAG_REMOVE_PRODUCT,
  payload
})

export const bagListProduct = payload => ({
  type: BAG_LIST_PRODUCT,
  payload
})
