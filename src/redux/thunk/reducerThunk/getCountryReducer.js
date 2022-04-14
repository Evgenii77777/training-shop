import { createSlice } from "@reduxjs/toolkit";
import { fetchCountry } from "../asincThunk/getCountryThunk";

const todoSlice = createSlice({
  name: "country",
  initialState: {
    country: [],
    status: "",
    loading: false,
    error: false,
    closed: false,
  },

  extraReducers: {
    [fetchCountry.pending]: (state) => {
      state.loading = true;
      state.status = "pending";
      state.error = false;
      state.closed = false;
    },
    [fetchCountry.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = "fulfilled";
      state.country = [action.payload];
      state.closed = true;
    },
    [fetchCountry.rejected]: (state) => {
      state.error = true;
      state.status = "rejected";
      state.loading = false;
      state.closed = false;
    },
  },
});

export default todoSlice.reducer;
