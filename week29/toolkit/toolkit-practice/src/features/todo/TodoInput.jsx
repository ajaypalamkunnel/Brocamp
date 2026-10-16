import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

const TodoInput = () => {


    const [text,setText] = useState("")
    const dispath = useDispatch()


    const handleClick=()=>{
        if(text.trim()){
           
            dispath(addTodo(text))
            setText("")
        }
    }



  return (
    <div>

        <input
       
         type="text"
         value={text}
         placeholder='Enter task'   
         onChange={(e)=>setText(e.target.value)}
         />

        <button onClick={handleClick}>Add➕</button>

    </div>
  )
}

export default TodoInput