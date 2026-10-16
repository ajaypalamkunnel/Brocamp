import { useReducer } from "react";

const initialState={
    count:0
}

const reducer = (state,actions) =>{
    switch (actions.type) {
        case 'increase':
            return {
                count:state+1
            }
        case 'decrease':
            return {
                count:state-1
            }
        default:
            throw new Error("Invalid action type"); 
    }
}
 

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

   

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
            <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
        </div>
    );
}

export default Counter;
