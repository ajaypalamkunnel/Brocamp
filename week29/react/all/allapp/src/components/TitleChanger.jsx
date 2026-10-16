import React from 'react'
import { useState } from 'react'

const TitleChanger = () => {

    const [count,setCount] = useState(0)

    useState(()=>{

        document.title = `count ${count}`

    },[count])

  return (
    <div>
        <h4>{count}</h4>
        <button onClick={()=>setCount(count =>count+1)}>increment</button>

    </div>
  )
}

export default TitleChanger