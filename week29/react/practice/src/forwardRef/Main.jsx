import React, { useEffect, useRef, useState } from 'react'
import Sub from './Sub'

const Main = () => {

    const [content,setContent] = useState("")
    const subRef = useRef()

    useEffect(()=>{
        if(subRef.current){
            subRef.current.textContent = content
        }
    },[content])
  return (
    <div>

        <Sub ref={subRef}/>

        <input onClick={(e)=>setContent(e.target.value)} type="text" />


    </div>
  )
}

export default Main