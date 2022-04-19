import { createReducer } from "@reduxjs/toolkit";
import { addCities } from "./cities-actions";

export const citiesReducer = createReducer(
  {
    cities: [],
  },
  {
    [addCities]: (state, { payload }) => {
      state.cities = payload;
    },
  }
);
