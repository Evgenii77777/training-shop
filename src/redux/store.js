import { basketReducer } from "./btnBasket/btnBasket-reducer";
import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./thunk/reducerThunk/getAllProductsReducer";
import productReducer from "./thunk/reducerThunk/getProductReducer";
import mailReducer from "./thunk/reducerThunk/postEmailReducer";
import reviewReducer from "./thunk/reducerThunk/postReviewReducer";
import mailFooterReducer from "./thunk/reducerThunk/postEmailFooterReducer";
import countryReducer from "./thunk/reducerThunk/getCountryReducer";
import cartReducer from "./thunk/reducerThunk/postOrderReducer";
import { orderReducer } from "./order/order-reducer";
import deliveryCityReducer from "./thunk/reducerThunk/postDeliveryCityReducer";
import { citiesReducer } from "./cities/cities-redcer";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    items: itemsReducer,
    item: productReducer,
    mail: mailReducer,
    mailFooter: mailFooterReducer,
    review: reviewReducer,
    country: countryReducer,
    order: orderReducer,
    cart: cartReducer,
    city: deliveryCityReducer,
    cities: citiesReducer,
  },
});
export default store;
