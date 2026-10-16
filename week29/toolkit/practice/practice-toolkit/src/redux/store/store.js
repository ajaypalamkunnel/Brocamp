import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counterSilce'

const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})


export default store