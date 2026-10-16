import React, { useState } from 'react'
import "./colorPicker.css"
function ColorPicker() {

    const [bgColor,setBg] = useState('white')

    function changeColor(color){
        setBg(color)
    }

  return (
    <div>

        <div>
            <div style={{width:'300px',height:'200px',borderRadius:'10px' ,backgroundColor:bgColor}} className='colorDisplay'>

            </div>



            <div style={{marginTop:"30px"}} className='buttonContainer'>

                <button onClick={()=>setBg('red')} style={{backgroundColor:'red',marginLeft:"10px"}}>Red</button>
                <button onClick={()=>setBg('green')} style={{backgroundColor:'green',marginLeft:"10px"}}>Green</button>
                <button onClick={()=>setBg('blue')} style={{backgroundColor:'blue',marginLeft:"10px"}}>Blue</button>

            </div>
        </div>

    </div>
  )
}

export default ColorPicker