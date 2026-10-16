import store from "./app/store.js";
import cakeActions from './features/cake/cakeSlice.js'
import { ordered } from "./features/cake/cakeSlice.js";

console.log('Initial state',store.getState());

const unSubscribe = store.subscribe(()=>{
    console.log('Updated state ',store.getState());
    
})


store.dispatch(ordered())
store.dispatch(ordered())
store.dispatch(ordered())