import axios from 'axios'
import { useState, useEffect } from 'react'
import { TYPES } from './shoppingActions'

export const shoppingInitialState = async () => {
  const [producto, setProducto] = useState([])
  const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
  console.log('api', res.data)
  setProducto(res.data)
}

useEffect(() => {
  shoppingInitialState()
}, [])

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const newItem = state.products.find(product => product.id === action.payload)
      console.log(newItem)

      const itemInCart = state.cart.find(item => item.id === newItem.id)

      return itemInCart
        ? {
          ...state,
          cart: state.cart.map(item => item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
          )
        }
        : {
          ...state,
          cart: [...state.cart, { ...newItem, quantity: 1 }]
        }
    }
    case TYPES.REMOVE_ONE_TO_CART: {
      const itemToDelete = state.cart.find(item => item.id === action.payload)

      return itemToDelete.quantity > 1
        ? {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        }
        : {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload)
        }
    }
    case TYPES.REMOVE_ALL_TO_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState
    default:
      return state
  }
}
