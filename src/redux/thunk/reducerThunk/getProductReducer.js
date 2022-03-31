import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "../asincThunk/getProductThunk";

const todoSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    status: "",
    loading: false,
    error: false,
    closed: false,
  },

  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.loading = true;
      state.status = "pending";
      state.error = false;
      state.closed = false;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = "fulfilled";
      state.product = [action.payload];
      state.closed = true;
    },
    [fetchProduct.rejected]: (state) => {
      state.error = true;
      state.status = "rejected";
      state.loading = false;
      state.closed = false;
    },
  },
});

export default todoSlice.reducer;
