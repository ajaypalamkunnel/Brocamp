import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    numberOfCakes : 10
}

const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        buyCake:(state)=>{
            if(state.numberOfCakes>0){
                state.numberOfCakes -= 1
            }
        }
    }

})

export const {buyCake} = cakeSlice.actions;
export default cakeSlice.reducer