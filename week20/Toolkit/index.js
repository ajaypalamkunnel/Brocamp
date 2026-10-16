import {createStore} from 'redux'


const CAKE_ORDERED = "CAKE_ORDERED";
const RESTORE = 'RESTORE'

//action
const orderCake = () => {
  return{
    type: CAKE_ORDERED,
    quantity: 1
  }
};


const reStockCake =(qty)=>{
    return{
        type:RESTORE,
        quantity:qty
    }
}


//reducer
//(previousstate,action) => newState 
const initialState = {
    numOfCake:10 
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCake:state.numOfCake - 1
            }

        case RESTORE:
            return{
                ...state,
                numOfCake:state.numOfCake + action.quantity
            }
            default:
                return state
    }
}


const store = createStore(reducer)

console.log('Initial state : ',store.getState());


const unSubscribe = store.subscribe(()=>console.log('updated state',store.getState()))



store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

store.dispatch(reStockCake(5))
store.dispatch(reStockCake(100))
store.dispatch(reStockCake(2))
store.dispatch(reStockCake(22))
store.dispatch(reStockCake(12))

console.log("=====>",unSubscribe);
//unSubscribe()