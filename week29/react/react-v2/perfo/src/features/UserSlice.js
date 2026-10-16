import { createSlice, createAsyncThunk }  from "@reduxjs/toolkit"



export const fetchUser = createAsyncThunk('/users/fetchusers',async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
})


const initialState = {
    users:[],
    status:'idle',
    error:null
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        builder
        .addCase(fetchUser.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.status = "success",
            state.users = action.payload
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            state.status = "error",
            state.error = action.error.message
        })
    }
})


export default userSlice.reducer