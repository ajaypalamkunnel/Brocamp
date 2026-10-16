import React, { useReducer } from 'react'

const initaiState={
    firstCounter:0,
    secondCounter:2

}
const UseRed = () => {


    const [count, dispatch] = useReducer((state=initaiState,action)=>{
                switch(action.type){
                    case 'increment':
                        return {...state,firstCounter:state.firstCounter+action.value}
                    case 'decrement':
                        return {...state,firstCounter:state.firstCounter-action.value}
                    case 'increment2':
                        return {...state,secondCounter:state.secondCounter+action.value}
                    case 'decrement2':
                        return {...state,secondCounter:state.secondCounter-action.value}

                    default:
                        return state


                }
    },initaiState)


  return (
    <div>
        <h1>counter 1 : {count.firstCounter}</h1>

        <h1>counter 2 : {count.secondCounter}</h1>

        <button onClick={()=>{dispatch({type:'increment',value:1})}}>Increment counter by 1</button>
        <button onClick={()=>{dispatch({type:'decrement',value:1})}}>Decrement counter by 1</button>
        <button onClick={()=>{dispatch({type:'increment2',value:1})}}>Increment counter2 by 1</button>
        <button onClick={()=>{dispatch({type:'decrement2',value:1})}}>Decrement counter2 by 1</button>


        <button></button>
    </div>
  )
}

export default UseRed