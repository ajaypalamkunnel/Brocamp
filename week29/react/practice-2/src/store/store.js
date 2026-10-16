import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CounterSlice"
import userReducer from "../features/DataFetch"

const logger = (store)=>(next)=>(action)=>{
    console.log("Dispatching ",action)
    
    const result = next(action);

    console.log("Next state:",store.getState())
   return result
}


export const store = configureStore({
    reducer:{
        counter:counterReducer,
        user:userReducer
    },
    middleware:(getDefaultmiddleware)=>
        getDefaultmiddleware().concat(logger)
    
})  

