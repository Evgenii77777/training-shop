import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async function (id, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://training.cleverland.by/shop/prsoduct/${id}`
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    loading: false,
    error: false,
  },

  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = [action.payload];
    },
    [fetchProduct.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export default todoSlice.reducer;
