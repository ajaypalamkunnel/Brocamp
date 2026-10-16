import React, { useState } from 'react'

const Data = () => {

    const states = ["Kerala","Tamil Nadu","Telangana"]
    const capitals = ["TVM","Chennai","Hydrabad"]

    const [state,setState] = useState("")
    const [capital,setCapital] = useState("")


  return (
    <div>

       
        <label htmlFor="">States</label>
       <select onChange={(e)=>setState(e.target.value)} id='states'>
            {
                states.map((state,idx)=>(
                    <option  id={idx} value={state}>{state}</option>
                ))
            }
       </select><br /><br />
        <label htmlFor="">States</label>
       <select onChange={(e)=>setCapital(e.target.value)} id='capitals'>
            {
                capitals.map((capital,idx)=>(
                    <option  id={idx} value={capital}>{capital}</option>
                ))
            }
       </select>

          {state && capital && (
        <h2>
          Selected: {state} - {capital}
        </h2>
      )}

        
    </div>
  )
}

export default Data