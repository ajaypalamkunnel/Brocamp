import React, { useState } from 'react'

function ClickCounter() {

    let [count,setCouter] = useState(0)
    let [data,setData] = useState("dummmy")
  return (
    <div>
        <h2>Button clicked: {count}</h2>

        <button onClick={()=>setCouter(count+1)}>Click</button>

        <h4>{data&&(data)}</h4>

        <button onClick={()=>setData("Data changed")}>change Data</button>

    </div>
  )
}

export default ClickCounter