

import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContexProvider'

const Counter = () => {
    const {count} = useContext(CounterContext)
  return (
    <div>
        {count}
    </div>
  )
}

export default Counter