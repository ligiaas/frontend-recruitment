import {
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_SUCCESS,

  BAG_ADD_PRODUCT,
  BAG_LIST_PRODUCT,
  BAG_REMOVE_PRODUCT
} from './constants';

const initialStateProducts = {
  products: [],
  error: null,
  loading: false
};

export const initialStateBag = {
  products: [],
  error: null,
  loading: false,
  success: false
};

export function productReducer(state = initialStateProducts, { type, payload }) {
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
        success: true
      }
    }
    case FETCH_PRODUCTS_FAILED: {
      return {
        ...state,
        products: null,
        error: payload,
      }
    }
    default:
      return state;
  };
};

const removeProduct = (products, productToRemove) => {
  const newProducts = [ ...products ];
  const idxToRemove = newProducts.indexOf(productToRemove);
  newProducts.splice(idxToRemove, 1);
  return newProducts;
};

export function bagReducer(state = initialStateBag, { type, payload }) {
  switch(type) {
    case BAG_ADD_PRODUCT: {
      return {
        ...state,
        products: [
          ...state.products,
          payload
        ],
        error: false,
        success: true
      }
    }
    case BAG_REMOVE_PRODUCT: {
      return {
        ...state,
        products: removeProduct(state.products, payload),
        error: false,
        success: true
      }
    }
    case BAG_LIST_PRODUCT: {
      return {
        ...state,
        products: [
          ...state.products
        ],
        loading: true,
        error: false,
        success: false
      }
    }
    default:
      return state;
  };
};