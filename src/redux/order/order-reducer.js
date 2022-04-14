import { createReducer } from "@reduxjs/toolkit";
import { addPickup, addCart, addProducts } from "./order-actions";

export const orderReducer = createReducer(
  {
    products: [],
    pickup: [],
    cart: [],
  },
  {
    [addProducts]: (state, { payload }) => {
      state.products = payload;
    },
    [addPickup]: (state, { payload }) => {
      state.pickup = payload;
    },
    [addCart]: (state, { payload }) => {
      state.cart = payload;
    },
  }
);
