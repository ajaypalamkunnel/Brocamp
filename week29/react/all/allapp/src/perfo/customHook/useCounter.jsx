

import React, { useState } from 'react'

const useCounter = () => {

    const [count,setCount] = useState(0)

    const increment = ()=>{
        setCount(count+1)
    }

  return {
    increment,
    count,

  }
}

export default useCounter