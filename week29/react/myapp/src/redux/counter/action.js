//action creator

import { DECREMENT, DECREMENT_COUNTER2_BY_5, INCREMENT, INCREMENT_COUNTER2_BY_5 } from "./conterTypes"


export const increment = () =>{
    return {
        type: INCREMENT
    }
}

export const decrement = () =>{
    return {
        type: DECREMENT
    }
}

export const    incremeCount2ByFive = () =>{
    return {
        type: INCREMENT_COUNTER2_BY_5
    }
}

export const decremetCount2ByFive = () =>{
    return {
        type: DECREMENT_COUNTER2_BY_5
    }
}