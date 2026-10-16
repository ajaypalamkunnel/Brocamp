import { useState } from 'react'
import './App.css'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { decrement, increment, logger } from './actions'
import Form from './components/Form'
import ShowForm from './components/ShowForm'
import store from './store'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  const handleIncrement = () => dispatch(increment(5))
  const handleDecrement = () => dispatch(decrement())
  const handleLogger = () => dispatch(logger())

  return (
    <Provider store={store}>
      <div>
        {/* <h1>Hellooooo</h1>
        <h1>Counter: {counter}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        {isLogged ? (
          <div>
            <p>Valuable information</p>
            <button onClick={handleLogger}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Please login</p>
            <button onClick={handleLogger}>Login</button>
          </div>
        )} */}
        <Form />
        <ShowForm />
      </div>
    </Provider>
  )
}

export default App