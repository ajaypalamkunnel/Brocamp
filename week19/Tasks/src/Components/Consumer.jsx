import React, { useContext } from 'react'
import ColorContextProvider, { ColorContext } from '../Context/ColorContext'

const Consumer = () => {

    const {color,colorSetter} = useContext(ColorContext)


  return (
    <div style={{width:'100px',height:'100px', backgroundColor:color}}>

            <h1>{color}</h1>

            <button onClick={colorSetter}>change color</button>

    </div>

  )
}

export default Consumer