import { createReducer } from "@reduxjs/toolkit";
import { addPickup, addCart, addProducts } from "./order-actions";

export const orderReducer = createReducer(
  {
    cart: [],
    pickup: [],
    card: [],
  },
  {
    [addProducts]: (state, { payload }) => {
      state.cart = payload;
    },
    [addPickup]: (state, { payload }) => {
      state.pickup = payload;
    },
    [addCart]: (state, { payload }) => {
      state.card = payload;
    },
  }
);
