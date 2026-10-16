import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
