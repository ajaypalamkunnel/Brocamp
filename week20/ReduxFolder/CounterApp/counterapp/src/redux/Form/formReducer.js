import { SUBMIT_FROM } from "./FormTypes";

const initialState = {
  name: "",
  age: "",
};

const formReducer = (state = initialState, action) => {

    const { type, payload } = action;
  switch (type) {
    case SUBMIT_FROM:
      return {
        ...state,
        name: payload.name,
        age: payload.age,
      };

    default:
      return state;
  }
};


export default formReducer;
