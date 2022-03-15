// export const basketReducer = (
//   state = {
//     visible: false,
//   },
//   { type, payload }
// ) => {
//   switch (type) {
//     case "toggle/Basket":
//       return {
//         visible: !payload,
//       };

//     default:
//       return state;
//   }
// };

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
} from "./btnBasket-actions";

export const basketReducer = createReducer(
  {
    visible: false,
    card: [],
    color: "",
    size: "",
  },
  {
    [toggleBasket]: (state, { payload }) => {
      state.visible = !payload;
    },
    [toggleBasketSide]: (state, { payload }) => {
      if (payload === "Basket_openBasket__tceLU") {
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
  }
);
