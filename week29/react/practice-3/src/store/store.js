import {configureStore} from '@reduxjs/toolkit'
import CounterReducer from "../features/CounterSlice"
import userReducer from "../features/FetchData"
export const store = configureStore({
    reducer:{
        counter:CounterReducer,
        user:userReducer
    }
})

