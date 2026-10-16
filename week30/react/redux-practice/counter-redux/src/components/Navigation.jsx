

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {

    const navigate = useNavigate()


  return (
    <div>
        <h4>Home</h4>
        <button onClick={()=>navigate("/country")}>country</button>
        <button onClick={()=>navigate("/redux")}>Redux</button>
        <button onClick={()=>navigate("/fruits")}>Buy Fruit</button>
        <button onClick={()=>navigate("/debounce")}>Debou</button>
        <button onClick={()=>navigate("/memo")}>Memo</button>
        <button onClick={()=>navigate("/usememo")}>use Memo</button>
    </div>
  )
}

export default Navigation