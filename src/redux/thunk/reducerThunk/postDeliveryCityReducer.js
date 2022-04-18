import { createSlice } from "@reduxjs/toolkit";
import { postCity } from "../asincThunk/postDeliveryCity";

const todoSlice = createSlice({
  name: "deliveryCities",
  initialState: {
    status: null,
    loading: false,
    error: false,
  },

  extraReducers: {
    [postCity.pending]: (state) => {
      state.status = "loading";
      state.loading = true;
      state.error = false;
    },
    [postCity.fulfilled]: (state) => {
      state.status = "resolved";
      state.loading = false;
      state.error = false;
    },
    [postCity.rejected]: (state) => {
      state.error = true;
      state.message = "Ошибка при отправке отзыва";
      state.loading = false;
    },
  },
});

export default todoSlice.reducer;
