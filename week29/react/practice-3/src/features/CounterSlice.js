import {createSlice} from '@reduxjs/toolkit'

const initialState = {value:1}

const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.value+=1
        }
    }
})

export const {increment} = CounterSlice.actions

export default CounterSlice.reducer