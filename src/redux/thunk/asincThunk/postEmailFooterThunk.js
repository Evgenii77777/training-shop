import { createAsyncThunk } from "@reduxjs/toolkit";

export const emailPostFooter = createAsyncThunk(
  "email/emailPostFooter",
  async function (email, { rejectWithValue }) {
    try {
      const newMail = {
        mail: email,
      };
      const response = await fetch(
        "https://training.cleverland.by/shop/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(newMail),
        }
      );
      if (!response.ok) {
        throw new Error("Can't add task. Server error.");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
