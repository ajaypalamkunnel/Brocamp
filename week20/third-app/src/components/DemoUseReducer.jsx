import React, { useReducer } from 'react'


const initialState = 0

const reducer = (state=initialState,action)=>{
    switch(action){
        case 'increment':
            return state = state + 1

        case 'decrement':
            return state = state - 1
        default:
            return state
    }
}

const DemoUseReducer = () => {

    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>

        <h1>{count}</h1>
        <button onClick={()=>dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>

    </div>
  )
}

export default DemoUseReducer