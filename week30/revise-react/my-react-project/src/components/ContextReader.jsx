

import React, { useContext } from 'react'
import { counterContext } from '../context/ContextProvider'

const ContextReader = () => {


    const {count,setCount} = useContext(counterContext)

  return (
    <div>
        <h1>Context Reader</h1>

        {count}

        <button onClick={()=>setCount(count+1)}>Increament</button>

    </div>
  )
}

export default ContextReader