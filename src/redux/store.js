import { basketReducer } from "./btnBasket/btnBasket-reducer";
import { configureStore } from "@reduxjs/toolkit";

// import productsReducer from "./backend/backend-reducer";
import itemsReducer from "./thunk/getAllProducts";
import productReducer from "./thunk/getProduct";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    // products: productsReducer,
    items: itemsReducer,
    item: productReducer,
  },
});
export default store;
