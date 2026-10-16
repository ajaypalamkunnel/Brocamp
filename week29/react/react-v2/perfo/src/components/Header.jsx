import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()
  return (
    <div style={{width:"1000%",height:"100px" , backgroundColor:"orangered", display:"flex", gap:"20px"}}>

        <button style={{height:"50px"}}  onClick={()=>navigate('/users')}>users</button>
        <button style={{height:"50px"}}  onClick={()=>navigate('/')}>home</button>
        <button style={{height:"50px"}}  onClick={()=>navigate('/memo')}>Memo</button>
        <button style={{height:"50px"}}  onClick={()=>navigate('/usecallback')}>usecallback</button>
        <button style={{height:"50px"}}  onClick={()=>navigate('/usememo')}>useMemo</button>
        
       

    </div>
  )
}

export default Header