import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counterReducer'
import userReducer from '../features/UserSlice'
const store = configureStore({
    reducer:{
        counter:counterReducer,
        users:userReducer
    }
})

export default store