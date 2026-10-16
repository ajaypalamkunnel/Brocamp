import { createSlice } from "@reduxjs/toolkit";


const stopwatchData = {
    time:0,
    IntervalId:null 
}


const StopWatch = createSlice({
    name:"stopwatch",
    initialState:stopwatchData,
    reducers:{
        setIntervalId:(state,action)=>{
            state.IntervalId = action.payload
        },
        clearIntervalId:(state)=>{
            state.IntervalId && clearInterval(state.IntervalId)
            state.IntervalId = null
        },
        tick:(state)=>{
            console.log("hiiii");
            
            state.time += 1
        },
        reset:(state)=>{
            state.time = 0
        }
    }
})

export const{setIntervalId,clearIntervalId,tick,reset} = StopWatch.actions
export default StopWatch.reducer