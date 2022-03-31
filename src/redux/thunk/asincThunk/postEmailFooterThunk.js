import { createAsyncThunk } from "@reduxjs/toolkit";

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
