import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const featchUsers = createAsyncThunk("users/fetch",async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
})

const userSlice = createSlice({
    name:'users',
    initialState:{list:[],loading:false,error:null},
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(featchUsers.pending,(state)=>{
                state.loading = true;
            })
            .addCase(featchUsers.fulfilled,(state,action)=>{
                state.loading = false;
                state.list = action.payload
            })
            .addCase(featchUsers.rejected,(state,action)=>{
                state.loading = false,
                state.error = "Failed to fetch users"
            })
    }
})

export default userSlice.reducer