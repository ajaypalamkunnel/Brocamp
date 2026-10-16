import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk("user/fetchData",async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    return res.json()
})


const userData = createSlice({
    name:"fetchData",
    initialState:{status:"idel",data:null,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state)=>{
            state.status="pending"
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.data = action.payload,
            state.status = "succeed"
        })
        .addCase(fetchData.rejected,(state)=>{
            state.error = "error"
        })
    }
})


export default userData.reducer 