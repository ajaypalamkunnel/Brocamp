import React, { useReducer } from 'react'


const intialState = {
    firstCounter:0,
    secondCounter:0
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter:state.firstCounter+1}
        case 'decrement':
            return {...state,firstCounter:state.firstCounter-1}

        default:
            return {state}
    }
}

const PracticeUseReducer = () => {


    const [count,dispatch] = useReducer(reducer,intialState)



  return (
    <div>
        <h1>count: {count.firstCounter}</h1>

        <button onClick={()=>{dispatch({type:'increment'})}}>Increment</button>
        <button onClick={()=>{dispatch({type:'decrement'})}}>Decrement</button>

    </div>
  )
}

export default PracticeUseReducer