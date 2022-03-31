import { createSlice } from "@reduxjs/toolkit";
import { emailPostFooter } from "../asincThunk/postEmailFooterThunk";

const todoSlice = createSlice({
  name: "emailFooter",
  initialState: {
    message: "",
    status: null,
    loading: false,
    error: false,
    number: 0,
  },

  extraReducers: {
    [emailPostFooter.pending]: (state) => {
      state.status = "loading";
      state.loading = true;
      state.error = false;
      state.number += 1;
    },
    [emailPostFooter.fulfilled]: (state) => {
      state.status = "resolved";
      state.message = "Почта отправлена";
      state.loading = false;
      state.error = false;
    },
    [emailPostFooter.rejected]: (state) => {
      state.status = "error";
      state.error = true;
      state.message = "Ошибка отправки почты";
      state.loading = false;
    },
  },
});

export default todoSlice.reducer;
