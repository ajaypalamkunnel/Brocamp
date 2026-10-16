import { createSlice } from "@reduxjs/toolkit";
import { ordered } from "../cake/cakeSlice";


const initialState ={
    numOfIceCream : 10
}

const iceCreamSlice = createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIceCream--
        },
        restoked:(state,action)=>{
            state.numOfIceCream += action.payload
        }
    }


})

const {ordered,restoked} = iceCreamSlice.actions
export default iceCreamSlice.reducer