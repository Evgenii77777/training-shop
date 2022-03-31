import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../asincThunk/getAllProductsThunk";

const todoSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: false,
  },

  extraReducers: {
    [fetchAllProducts.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchAllProducts.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export default todoSlice.reducer;
