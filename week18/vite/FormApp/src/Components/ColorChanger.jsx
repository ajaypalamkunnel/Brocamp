import React from 'react'
import { useState } from 'react'

const ColorChanger = () => {

    const [color,setColor] = useState("white")
  return (
    <div>
    <div style={{width:"400px",height:"200px",backgroundColor:color}}>
        
    </div>

        <div className="btns">
            <button onClick={()=>setColor('red')}>Red</button>
            <button onClick={()=>setColor('blue')}>Blue</button>
            <button onClick={()=>setColor('green')}>Green</button>
            <button onClick={()=>setColor('orange')}>Orange</button>
        </div>

    </div>
  )
}

export default ColorChanger