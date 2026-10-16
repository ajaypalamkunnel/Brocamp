import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/CounterSlice'
import todoReducer from  '../features/TodoSlice'


export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer
    }
})

