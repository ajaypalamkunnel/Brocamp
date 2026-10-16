
import React from 'react'
import useCounter from '../hook/useCounter'

const CustomeHook = () => {

    const {counter,increment,decrement} = useCounter()

  return (
    <div>
        <h1>custome hook</h1>

        <h2>{counter}</h2>

        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>

    </div>
  )
}

export default CustomeHook