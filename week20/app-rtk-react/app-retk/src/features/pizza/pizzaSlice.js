import { createReducer, createSlice } from "@reduxjs/toolkit";
import reducer from "../cake/cakeSlice";

const initialState = {
    numOfPizza : 10
}

const pizzaSlice = createSlice({
    name:'pizza',
    initialState,
    reducers:{
        buyPizza:(state)=>{
            if(state.numOfPizza>0){
                state.numOfPizza -= 1
            }
        },
        reStockPizza:(state,action)=>{
            state.numOfPizza += action.payload
        }
    }

})

export const {buyPizza,reStockPizza} = pizzaSlice.actions

export default pizzaSlice.reducer