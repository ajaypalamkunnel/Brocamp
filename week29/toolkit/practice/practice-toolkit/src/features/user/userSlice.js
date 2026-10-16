import { createSlice } from "@reduxjs/toolkit";



const InitialUserState = {
    name:"",
    isLoggedIn:false

}


const userSlice = createSlice({
    name:"user",
    initialState:InitialUserState,
    reducers:{
        login:(state,actions)=>{
            state.name = actions.payload
            state.isLoggedIn = true
        },
        logout:(state)=>{
            state.isLoggedIn = false
            state.name = ""
        }
    }


})

export const {login,logout} = userSlice.actions
export default userSlice.reducer 