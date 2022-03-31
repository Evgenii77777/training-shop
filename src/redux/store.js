import { basketReducer } from "./btnBasket/btnBasket-reducer";
import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./thunk/reducerThunk/getAllProductsReducer";
import productReducer from "./thunk/reducerThunk/getProductReducer";
import mailReducer from "./thunk/reducerThunk/postEmailReducer";
import reviewReducer from "./thunk/reducerThunk/postReviewReducer";
import mailFooterReducer from "./thunk/reducerThunk/postEmailFooterReducer";

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
