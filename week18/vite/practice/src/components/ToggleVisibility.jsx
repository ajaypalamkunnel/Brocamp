import React from 'react'
import { useState } from 'react'

function ToggleVisibility() {

    const [visibility,setVisibility] = useState(true)

    function handleVisbility(){
        setVisibility(visibility?false:true)
    }


  return (
    <div>

        <div style={{width:'300px',height:'200x'}}>

        {visibility?
            (<h1>Hi welcome</h1>)
            : <h1></h1>
        }
        </div>

        <button onClick={handleVisbility}>{visibility?('Hide'):('Show')}</button>
    </div>

  )
}

export default ToggleVisibility