import { createSlice } from "@reduxjs/toolkit";
import { reviewPost } from "../asincThunk/postReviewThunk";

const todoSlice = createSlice({
  name: "review",
  initialState: {
    message: "",
    status: null,
    loading: false,
    error: false,
  },
  reducers: {
    fetchProduct(state, action) {
      state.item.product = action.payload;
    },
  },

  extraReducers: {
    [reviewPost.pending]: (state) => {
      state.status = "loading";
      state.loading = true;
      state.error = false;
    },
    [reviewPost.fulfilled]: (state) => {
      state.status = "resolved";
      state.message = "Отзыв отправлен успешно";
      state.loading = false;
      state.error = false;
    },
    [reviewPost.rejected]: (state) => {
      state.error = true;
      state.message = "Ошибка при отправке отзыва";
      state.loading = false;
    },
  },
});

export default todoSlice.reducer;
