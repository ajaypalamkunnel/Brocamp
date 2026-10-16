import { createSlice } from "@reduxjs/toolkit";


const couterState = {
    count:1
}

const counterSlice = createSlice({
    name:"counter",
    initialState:couterState,
    reducers:{
        increment:(state)=>{
            console.log("hello");
            
            state.count += 1
        },
        decrement:(state)=>{
            state.count -= 1
        }
    }
})

export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer