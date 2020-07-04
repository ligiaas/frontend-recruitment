import {
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from './actions'

export const initialState = { 
  products: [],
  loading: false,
  error: null
}

export default function productReducer(state = initialState, action) {
  console.log(state)
  switch(action.type) {
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
        products: [
          action.payload,
        ],
        loading: false,
        error: null,
      }
    }
    case FETCH_PRODUCTS_FAILED: {
      return {
        ...state,
        products: null,
        error: action.payload,
        loading: false,
      }
    }

    default:
      return state;
  }
}