import React, { useReducer } from 'react'



const intialState = {
    firstCounter:0,
    secondCounter:2
}
const UseReducerObj = () => {


    const [count,dispatch] = useReducer((state=intialState,action)=>{
        switch (action.type) {
            case 'increment': 
                return{...state,firstCounter:state.firstCounter+action.value}
            case 'decrement':
                return {...state,firstCounter:state.firstCounter-action.value}
            case 'reset':
                return {firstCounter:0}
            case 'increment2':
                return {...state,secondCounter:state.secondCounter+action.value}
            case 'decrement2':
                return {...state,secondCounter:state.secondCounteraction.value}
            default:
                return state
            
        }

    },intialState)




  return (
    <div>

        <h1>User Reducer with obj</h1>

        <h1>First counter: {count.firstCounter}</h1>


        <h1>Second Counter: {count.secondCounter}</h1>
        <div style={{display:'flex',alignContent:'space-between',backgroundColor:'blue'}}>

        <button onClick={()=>dispatch({type:'increment',value:1})}>Increment by 1</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement by 1</button>


        <button onClick={()=>{dispatch({type:'increment',value:5})}}>Increment by 5</button>
        <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement by 5</button>


        <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment by 1</button>
        <button onClick={()=>dispatch({type:'decrement2',value:1})}>Decrement by 1</button>

        <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
        </div>

    </div>
  )
}

export default UseReducerObj