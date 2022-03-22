import axios from "axios";
import {
  get_AllProducts_Error,
  get_AllProducts_Request,
  get_AllProducts_Success,
  get_product_Request,
  get_product_Successs,
  get_product_Error,
} from "./backend-actions";

export const getAllProducts = () => async (dispatch) => {
  dispatch(get_AllProducts_Request());

  try {
    const { data } = await axios.get(
      "https://training.cleverland.by/shop/products"
    );

    dispatch(get_AllProducts_Success(data));
  } catch (error) {
    dispatch(get_AllProducts_Error(error));
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch(get_product_Request());

  try {
    const { data } = await axios.get(
      `https://training.cleverland.by/shop/product/${id}`
    );
    dispatch(get_product_Successs(data));
  } catch (error) {
    dispatch(get_product_Error(error));
  }
};
