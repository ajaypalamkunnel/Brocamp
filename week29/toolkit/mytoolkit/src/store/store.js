import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import userReducer from "../features/user/userSlice"
import themeReducer from "../features/theme/themeSlice"
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        user:userReducer,
        theme:themeReducer
    }
})