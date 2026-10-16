import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducers";
import pizzaReducer from "./pizza/pizzaReducer";


const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    pizza:pizzaReducer
})


export default rootReducer