import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

  return (
    <>


        <div style={{ textAlign: 'center', marginTop: '50px' }}>

            <h1>Counter: {count}</h1>
    
            <button onClick={()=>dispatch(increment())}>Incement</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>Increment by value 5</button>

        </div>


    </>
  )
}

export default Counter