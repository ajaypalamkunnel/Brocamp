import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



export const fetchUser = createAsyncThunk("user/fetch",async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    return res.json()
})

console.log(fetchUser);


const dataFetchSlice = createSlice({
    name:"datafetch",
    initialState:{data:{},status:"idle"},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending,(state)=>{state.status="loading"})
        .addCase(fetchUser.fulfilled,(state,action)=>{state.status="succeeded",state.data=action.payload})
        .addCase(fetchUser.rejected,(state)=>{state.status="failed"})
    }
})


export default dataFetchSlice.reducer
