import { SUBMIT_FORM } from "./FormTypes"

const initialState = {
    name:'',
    age:''
}

const formReducer = (state=initialState,action)=>{
    const {type,payload} = action

    switch (type) {
        case SUBMIT_FORM:
            return{
                ...state,
                name:payload.name,
                age:payload.age
            }
           
    
        default:
           return state
    }
}

export default formReducer