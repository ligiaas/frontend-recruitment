import {
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  ADD_TOBAG,
  REMOVE_TOBAG } from './constants'

import { getProductsApi } from 'http/';

export const fetchProducts = () => async (
  dispatch,
) => {
  try {
    dispatch({
      type: FETCH_PRODUCTS_REQUESTED,
    });
    const response = await getProductsApi();
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCTS_FAILED,
      payload: 'err',
    });
  }
};