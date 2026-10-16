import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counterSlice'
import userReducer from '../thunk-features/UserSlice'
import todoReducer from "../features/TodoSlice"
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        users:userReducer,
        todo:todoReducer

    }
})