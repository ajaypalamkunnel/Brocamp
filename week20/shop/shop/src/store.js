import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from './features/cakeShop/cakeSlice'

const store = configureStore({
    reducer:{
        cake:cakeReducer
    }
})


export default store