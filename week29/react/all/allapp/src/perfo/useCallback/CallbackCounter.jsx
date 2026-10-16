

import React from 'react'

const child = React.memo(({onclick}) => {
    console.log("child rendered")
  return (
    
    <div>
        <button onClick={onclick}>Increment</button>
    </div>
  )
}
)


import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

const CallbackCounter = () => {

    const [count,setCount] = useState(0)

    const increment = useCallback(()=>{

        setCount((count=>count)+1)

    },[])
  return (
    <div>
        
    </div>
  )
}



export default CallbackCounter