import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  get_AllProducts_Error,
  get_AllProducts_Success,
  get_AllProducts_Request,
  get_product_Error,
  get_product_Request,
  get_product_Successs,
} from "./backend-actions";

const products = createReducer([], {
  [get_AllProducts_Success]: (_, { payload }) => payload,
});
const product = createReducer([], {
  [get_product_Successs]: (_, { payload }) => [payload],
});

const loading = createReducer(false, {
  [get_AllProducts_Request]: () => true,
  [get_AllProducts_Success]: () => false,
  [get_AllProducts_Error]: () => false,
  [get_product_Request]: () => true,
  [get_product_Successs]: () => false,
  [get_product_Error]: () => false,
});

const error = createReducer(false, {
  [get_AllProducts_Request]: () => false,
  [get_AllProducts_Success]: () => false,
  [get_AllProducts_Error]: () => true,
  [get_product_Request]: () => false,
  [get_product_Successs]: () => false,
  [get_product_Error]: () => true,
});

export default combineReducers({
  products,
  product,
  loading,
  error,
});
