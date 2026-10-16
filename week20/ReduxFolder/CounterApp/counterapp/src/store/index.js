import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";


const allReducres = combineReducers(
    {
        counter:counterReducer,
        isLogged:loggedReducer
    }
)


export default allReducres