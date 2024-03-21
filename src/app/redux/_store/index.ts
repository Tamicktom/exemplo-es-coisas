"use client";
//* Libraries imports
import { configureStore } from "@reduxjs/toolkit";

//* Import slices
import counterSlice from "../_slices/countSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
