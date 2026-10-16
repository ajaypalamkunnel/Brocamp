import React from 'react'
import { useReducer } from 'react'


const counterReducer=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return {count:state.count+1}
            
        case 'decrement':
            return{count:state.count-1}
    
        default:
            throw new Error("Unknown")
    }
}

const DemoUseReducer = () => {

    const initialState = {count:0}

    const [state,dispatch] = useReducer(counterReducer,initialState)

    console.log(state);
    

  return (
    <div>

        <h1>Counter : {state.count}</h1>

        <button onClick={()=>dispatch({type:'increment'})}>increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>

    </div>
  )
}

export default DemoUseReducer