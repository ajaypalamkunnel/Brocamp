import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    numOfIceCream:10
}
const iceCreamSlice = createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        buyIceCream:(state)=>{
            if(state.numOfIceCream > 0){
                state.numOfIceCream -= 1
            }
        },
        reStockIceCream:(state,action)=>{
            state.numOfIceCream += action.payload
        }

    }

})

export const {buyIceCream,reStockIceCream} = iceCreamSlice.actions
export default iceCreamSlice.reducer