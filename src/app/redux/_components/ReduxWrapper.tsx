"use client";
// Libraries imports
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

//* Import store
import { store } from "../_store";

export function ReduxWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}