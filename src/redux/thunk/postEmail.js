import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const emailPost = createAsyncThunk(
  "email/emailPost",
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
  name: "email",
  initialState: {
    message: "",
    status: null,
    loading: false,
    error: false,
  },

  extraReducers: {
    [emailPost.pending]: (state) => {
      state.status = "loading";
      state.loading = true;
      state.error = false;
    },
    [emailPost.fulfilled]: (state) => {
      state.status = "resolved";
      state.message = "Почта отправлена успешно";
      state.loading = false;
      state.error = false;
    },
    [emailPost.rejected]: (state) => {
      state.error = true;
      state.message = "Ошибка при отправке почты";
      state.loading = false;
    },
  },
});

export default todoSlice.reducer;
