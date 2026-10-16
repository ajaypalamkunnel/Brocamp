import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk('users/fetchUsers',async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
})



const initialState = {
    users:[],
    loading:false,
    error:null
}

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},

    extraReducers: (builder)=>{
        builder
            .addCase(fetchUsers.pending,(state)=>{
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled,(state,action)=>{
                state.loading = false
                state.users = action.payload;
                state.error = null
            })
            .addCase(fetchUsers.rejected,(state,action)=>{
                state.loading = false
                state.error = 'failed to fetch users'
            })
    }
})

export default userSlice.reducer