import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const emailPostFooter = createAsyncThunk(
  "emailFooter/emailFooterPost",
  async function (email, { rejectWithValue }) {
    try {
      const newMail = {
        mail: email,
      };
      await fetch("https://traisning.cleverland.by/shop/email", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(newMail),
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
