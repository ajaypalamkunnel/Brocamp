import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../features/couterSilce'
import loggerMiddleware from "../middleware/loggerMiddleware";


const store = configureStore({
    reducer:{
       count:counterSlice
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(loggerMiddleware)
})

export default store