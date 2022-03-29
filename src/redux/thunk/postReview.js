import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./getProduct";

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
      if (!response.ok) {
        throw new Error("Can't add task. Server error.");
      }

      const data = await response.json();
      dispatch(fetchProduct(data.id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
