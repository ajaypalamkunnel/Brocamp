import React from 'react'
import { useState } from 'react'
import TimerComponent from './TimerComponent'

const Unmount = () => {

    const [showTimer,setShowTimer] = useState(true)


  return (
    <div>

        <h1>UnMount Demo</h1>

        <button onClick={()=>setShowTimer(!showTimer)}>
            {showTimer?'UnMount Timer' : 'Mount Timer'}</button>

        {showTimer&&<TimerComponent/>}

    </div>
  )
}

export default Unmount