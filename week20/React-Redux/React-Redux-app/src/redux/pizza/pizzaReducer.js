import { BUY_PIZZA } from "./pizzaType"


const initailState = {
    numberOfPizza:100
}


const pizzaReducer =(state=initailState,action)=>{

    switch(action.type){
        case BUY_PIZZA:return{
            ...state,
            numberOfPizza:state.numberOfPizza-1
        }
        default: return state
    }

}

export default pizzaReducer