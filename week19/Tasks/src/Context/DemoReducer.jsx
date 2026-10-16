import React, { useReducer } from 'react'


const intialState = {
    firstCounter:0
}

const DemoReducer = () => {

    const[count,dispatch] = useReducer((state,action)=>{

        switch (action.type) {
            case 'increment':
                
                return {...state,firstCounter:state.firstCounter+1}

            case 'decrement':
                return {...state,firstCounter:state.firstCounter-1}
        
            default:
                return {state};
        }

    },intialState)


  return (
    <div>
        DemoReducer

        <h1>counter: {count.firstCounter}</h1>

        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>

    </div>

  )
}

export default DemoReducer