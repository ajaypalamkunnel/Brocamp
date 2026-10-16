import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterReducer.js"; // ✅ include .js

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
