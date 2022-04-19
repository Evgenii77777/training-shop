import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCities } from "../../cities/cities-actions";

export const postCity = createAsyncThunk(
  "deliveryCity/PostDeliveryCity",
  async function (text, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        "https://training.cleverland.by/shop/search/cities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(text),
        }
      );

      const data = await response.json();
      dispatch(addCities(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
