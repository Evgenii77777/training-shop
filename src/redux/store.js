import { basketReducer } from "./btnBasket/btnBasket-reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export default store;
