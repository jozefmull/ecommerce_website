import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {Product, CartProduct} from '../types/products'

// Define a type for the slice state
interface CartState {
  cart: CartProduct[],
  overlay: boolean
}

// Define the initial state using that type
const initialState: CartState = {
  cart: [],
  overlay: false
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart : (state, action: PayloadAction<Product>) => {
        const itemInCart = state.cart.find(item => item.title === action.payload.title)

        if (itemInCart) {
          itemInCart.qty++
        }else{
          const newProduct = {...action.payload, qty: 1}
          state.cart = [...state.cart, newProduct]
        }
    },
    incrementQty: (state, action: PayloadAction<Product>) => {
      const item = state.cart.find((item) => item.title === action.payload.title);
      if (item) {
        item.qty++
      }
    },
    decrementQty: (state, action: PayloadAction<Product>) => {
      const item = state.cart.find(item => item.title === action.payload.title);
      if (item) {
        if (item.qty === 1) {
          item.qty = 1
        }else{
          item.qty--
        }
      }
    },
    removeItem: (state, action: PayloadAction<Product>) => {
      // const removeItem = state.cart.filter((item) => item.id !== action.payload);
      // state.cart = removeItem;
    },
    handleOverlay: (state, action) => {
      state.overlay = action.payload
    }
  },
})

export const { addToCart, decrementQty, incrementQty, handleOverlay } = cartSlice.actions

export default cartSlice.reducer