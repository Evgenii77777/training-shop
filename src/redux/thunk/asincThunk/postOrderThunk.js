import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "../../btnBasket/btnBasket-actions";

export const orderPost = createAsyncThunk(
  "order/postOrderCountry",
  async function (text, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch("https://training.cleverland.by/shop/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      });
      if (!response.ok) {
        throw new Error("Can't add task. Server error.");
      }

      const data = await response.json();
      console.log(data);
      dispatch(message(data.message));
    } catch (error) {
      dispatch(message(error.message));
      return rejectWithValue(error.message);
    }
  }
);
export const order = createAsyncThunk(
  "order/post",
  async function (text, { rejectWithValue }) {
    try {
      console.log("haaaaa");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
