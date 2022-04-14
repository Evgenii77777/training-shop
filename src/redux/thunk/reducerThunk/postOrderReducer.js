import { createSlice } from "@reduxjs/toolkit";
import { order, orderPost } from "../asincThunk/postOrderThunk";

const todoSlice = createSlice({
  name: "order",
  initialState: {
    status: null,
    loading: false,
    error: false,
  },

  extraReducers: {
    [orderPost.pending]: (state) => {
      state.status = "loading";
      state.loading = true;
      state.error = false;
    },
    [orderPost.fulfilled]: (state) => {
      state.status = "resolved";
      state.loading = false;
      state.error = false;
    },
    [orderPost.rejected]: (state) => {
      state.status = "error";
      state.error = true;
      state.loading = false;
    },
    [order.fulfilled]: (state) => {
      state.status = "";
    },
  },
});

export default todoSlice.reducer;
