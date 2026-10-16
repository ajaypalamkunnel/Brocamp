import { createStore } from 'redux'
import conterReducer from '../counter/reducer'

const store = createStore(conterReducer)

export default store