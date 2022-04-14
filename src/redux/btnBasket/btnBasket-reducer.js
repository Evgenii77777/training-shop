import { createReducer } from "@reduxjs/toolkit";
import {
  toggleBasket,
  toggleBasketSide,
  addItem,
  deleteItem,
  currentColor,
  currentSize,
  increment,
  decrement,
  message,
  clearCard,
} from "./btnBasket-actions";

export const basketReducer = createReducer(
  {
    visible: false,
    card: [],
    color: "",
    size: "",
    error: false,
    message: "",
  },
  {
    [toggleBasket]: (state, { payload }) => {
      state.visible = !payload;
    },
    [toggleBasketSide]: (state, { payload }) => {
      if (payload === "backSide") {
        state.visible = false;
      }
    },
    [addItem]: (state, { payload }) => {
      state.card = [...state.card, payload];
    },
    [deleteItem]: (state, { payload }) => {
      state.card = state.card.filter((el) => el.newId !== payload);
    },
    [currentColor]: (state, { payload }) => {
      state.color = payload;
    },
    [currentSize]: (state, { payload }) => {
      state.size = payload;
    },
    [increment]: (state, { payload }) => {
      state.card.find((el) => {
        if (el.newId === payload) {
          return (el.quantity = el.quantity + 1);
        }
        return null;
      });
    },
    [decrement]: (state, { payload }) => {
      state.card.find((el) => {
        if (el.newId === payload) {
          return (el.quantity = el.quantity - 1);
        }
        return null;
      });
    },

    [message]: (state, { payload }) => {
      state.message = payload;
    },
    [clearCard]: (state) => {
      state.card = [];
    },
  }
);
