import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "allProducts/fetchAllProducts",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://training.cleverland.by/shop/products"
      );

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
