import { createAction } from "@reduxjs/toolkit";

export const get_AllProducts_Request = createAction("allProducts/request");
export const get_AllProducts_Success = createAction("allProducts/success");
export const get_AllProducts_Error = createAction("allProducts/error");

export const get_product_Request = createAction("product/request");
export const get_product_Successs = createAction("product/success");
export const get_product_Error = createAction("product/error");
