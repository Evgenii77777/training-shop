import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "../../btnBasket/btnBasket-actions";

export const orderPost = createAsyncThunk(
  "order/postOrderCountry",
  async function (text, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        "https://training.ccleverland.by/shop/cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(text),
        }
      );
      const data = await response.json();

      dispatch(message(data.message));
    } catch (error) {
      dispatch(message(error.message));
      return rejectWithValue(error.message);
    }
  }
);
export const order = createAsyncThunk(
  "order/post",
  async function (_, { rejectWithValue }) {
    try {
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
