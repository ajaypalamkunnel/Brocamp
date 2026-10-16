import { createSlice } from "@reduxjs/toolkit"


const themeInitialState = {
    mode:"light"
}

const themeSlice = createSlice({
    name:"theme",
    initialState:themeInitialState,
    reducers:{
        toggleTheme:(state)=>{
            
           state.mode = state.mode === 'light' ? "dark" : "light"
        }
    }
})

export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer