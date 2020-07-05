import {
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,

  BAG_ADD_PRODUCT,
  BAG_ADD_PRODUCT_SUCCESS,
  BAG_ADD_PRODUCT_FAILED,

  BAG_LIST_PRODUCT,
  BAG_LIST_PRODUCT_FAILED,
  BAG_LIST_PRODUCT_SUCCESS,

  BAG_REMOVE_PRODUCT,
  BAG_REMOVE_PRODUCT_FAILED,
  BAG_REMOVE_PRODUCT_SUCCESS
} from './constants'

export const initialStateBag = {
  products: [
    {
      size: 'G',
      product: {
        "id": 0,
        "sku": 8552515751438644,
        "title": "Camisa Nike Corinthians I",
        "description": "14/15 s/nº",
        "availableSizes": ["S", "G", "GG", "GGG"],
        "style": "Branco com listras pretas",
        "price": 229.9,
        "installments": 9,
        "currencyId": "BRL",
        "currencyFormat": "R$",
        "isFreeShipping": true
      },
      amount: 2
    }
  ]
}

const initialStateProducts = {
  products: [],
  error: null,
  loading: false
}

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
        loading: true
      }
    }
    case BAG_REMOVE_PRODUCT: {
      return {
        ...state,
        products: [ state.products.filter(item =>
            item.product.id !== payload
          )
        ],
        error: null,
        loading: false
      }
    }
    case BAG_LIST_PRODUCT: {
      return {
        ...state,
        products: [
          ...state.products
        ],
        error: null,
        loading: false
      }
    }
    default:
      return state;
  }
}