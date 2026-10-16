import { configureStore } from "@reduxjs/toolkit";

import counter from '../features/counterSlice'
import stopWatch from '../features/StopWatch'
export const store = configureStore({
    reducer:{
        counter:counter,
        stopWatch:stopWatch
    }
})