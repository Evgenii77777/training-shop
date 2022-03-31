import { createSlice } from "@reduxjs/toolkit";
import { emailPost } from "../asincThunk/postEmailThunk";

const todoSlice = createSlice({
  name: "email",
  initialState: {
    message: "",
    status: null,
    loading: false,
    error: false,
    number: 0,
  },

  extraReducers: {
    [emailPost.pending]: (state) => {
      state.status = "loading";
      state.loading = true;
      state.error = false;
      state.number += 1;
    },
    [emailPost.fulfilled]: (state) => {
      state.status = "resolved";
      state.message = "Почта отправлена успешно";
      state.loading = false;
      state.error = false;
    },
    [emailPost.rejected]: (state) => {
      state.status = "error";
      state.error = true;
      state.message = "Ошибка при отправке почты";
      state.loading = false;
    },
  },
});

export default todoSlice.reducer;
