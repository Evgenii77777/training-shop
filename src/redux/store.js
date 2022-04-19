import { basketReducer } from "./btnBasket/btnBasket-reducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["country"],
};

const rootReducer = combineReducers({
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
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
