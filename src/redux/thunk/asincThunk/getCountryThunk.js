import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountry = createAsyncThunk(
  "order/fetchCountry",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://training.cleverland.by/shop/countries"
      );
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
