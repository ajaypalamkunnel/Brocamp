import { DECREMENT, DECREMENT_COUNTER2_BY_5, INCREMENT, INCREMENT_COUNTER2_BY_5 } from "./conterTypes";

const initialState = {
    count:0,
    count2:5
}

function conterReducer(state=initialState,action){

    switch (action.type) {
        case INCREMENT:

            return {...state,count:state.count+1};
        case DECREMENT:
            return {...state,count:state.count-1}
        case INCREMENT_COUNTER2_BY_5:    
            return {...state,count2:state.count2+5}
        case DECREMENT_COUNTER2_BY_5:
            return {...state,count2:state.count2-5}
        default:
            return state
    }

}

export default conterReducer