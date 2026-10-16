import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/CounterSlice'
import filterReducer from '../features/todo/filterSlice'
import todoReducer from "../features/todo/todoSlice"
import { logger } from "../features/logger/logger";

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        filter:filterReducer,
        todos:todoReducer   
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(logger)
})