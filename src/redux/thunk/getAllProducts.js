import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "allProducts/fetchAllProducts",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://training.cleverland.by/shop/products"
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
