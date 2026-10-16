import React from 'react'
import { AppContext } from '../context/appContext'
import { useContext } from 'react'
const Two = (prps) => {
    const {data} = useContext(AppContext)
  return (
    <div style={{background:'green', width:'150px'}}> 
        <h1>Layer Two {data}</h1>
        <h3></h3>
    </div>
  )
}

export default Two