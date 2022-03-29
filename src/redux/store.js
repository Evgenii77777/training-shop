import { basketReducer } from "./btnBasket/btnBasket-reducer";
import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./thunk/getAllProducts";
import productReducer from "./thunk/getProduct";
import mailReducer from "./thunk/postEmail";
import reviewReducer from "./thunk/postReview";
import mailFooterReducer from "./thunk/postEmailFooter";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    items: itemsReducer,
    item: productReducer,
    mail: mailReducer,
    mailFooter: mailFooterReducer,
    review: reviewReducer,
  },
});
export default store;
