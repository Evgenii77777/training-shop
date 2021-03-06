import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async function (id, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://training.cleverland.by/shop/product/${id}`
      );

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
