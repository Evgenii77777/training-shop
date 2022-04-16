import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProduct } from "./getProductThunk";

export const reviewPost = createAsyncThunk(
  "review/addReview",
  async function (text, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        "https://training.cleverland.by/shop/product/review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(text),
        }
      );

      const data = await response.json();
      dispatch(fetchProduct(data.id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
