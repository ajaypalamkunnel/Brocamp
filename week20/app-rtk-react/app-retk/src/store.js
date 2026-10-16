import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './features/cake/cakeSlice'
import iceCreamReducer from './features/iceCream/iceCreamSlice';
import pizzaReducer from './features/pizza/pizzaSlice'
const store = configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream:iceCreamReducer,
        pizza:pizzaReducer
    }
})

export default store