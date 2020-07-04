import { actions } from './constants'

export const FETCH_PRODUCTS_REQUESTED = actions.FETCH_PRODUCTS_REQUESTED
export const FETCH_PRODUCTS_SUCCESS = actions.FETCH_PRODUCTS_SUCCESS
export const FETCH_PRODUCTS_FAILED = actions.FETCH_PRODUCTS_FAILED

export function fetchProductsRequested(payload) {
  return {
    type: FETCH_PRODUCTS_REQUESTED,
    payload
  }
}

export function fetchProductsSuccess(payload) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload
  }
}

export function fetchProductsFailed(payload) {
  return {
    type: FETCH_PRODUCTS_FAILED,
    payload
  }
}