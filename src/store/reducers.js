import {
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  ADD_TOBAG,
  REMOVE_TOBAG,
} from './constants'

export const initialState = {
  products: [],
  loading: false,
  error: null
}

export default function productReducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_PRODUCTS_REQUESTED: {
      return {
        ...state,
        products: [
          ...state.products,
        ],
        loading: true,
      }
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: payload,
        loading: false,
        error: null,
      }
    }
    case FETCH_PRODUCTS_FAILED: {
      return {
        ...state,
        products: null,
        error: payload,
        loading: false,
      }
    }
    default:
      return state;
  }
}