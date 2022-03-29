import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const emailPostFooter = createAsyncThunk(
  "emailFooter/emailFooterPost",
  async function (email, { rejectWithValue }) {
    try {
      const newMail = {
        mail: email,
      };
      await fetch("https://training.cleverland.by/shop/email", {
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
  },

  extraReducers: {
    [emailPostFooter.pending]: (state) => {
      state.status = "loading";
      state.loading = true;
      state.error = false;
    },
    [emailPostFooter.fulfilled]: (state) => {
      state.status = "resolved";
      state.message = "Почта отправлена";
      state.loading = false;
      state.error = false;
    },
    [emailPostFooter.rejected]: (state) => {
      state.error = true;
      state.message = "Ошибка отправки почты";
      state.loading = false;
    },
  },
});

export default todoSlice.reducer;
