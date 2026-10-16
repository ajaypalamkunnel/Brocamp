import React, { useReducer } from 'react'


const initialState = 0

const reducer = (state=initialState,action)=>{
    switch (action) {
        case 'increment':
            return state += 1
       case 'decrement':
        return state -= 1
        case 'reset':
            return state=0
        default:
            return state; 
    }
}

const UseReducerComponent = () => {


    const [count,dispatch ]= useReducer((state=initialState,action)=>{
        switch (action) {
            case 'increment':
                return state += 1
           case 'decrement':
            return state -= 1
            case 'reset':
                return state=0
            default:
                return state; 
        }
    },initialState)


  return (
    <div>
        <h1>Use Reducer counter</h1>
        <h1>{count}</h1>

        <button onClick={()=>dispatch("increment")}>Increment</button>
        <button onClick={()=>dispatch("decrement")}>Decrement</button>
        <button onClick={()=>dispatch("reset")}>Rest</button>

    </div>
  )
}

export default UseReducerComponent