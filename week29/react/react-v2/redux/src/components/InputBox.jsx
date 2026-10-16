

import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/TodoSlice'

const InputBox = () => {

    const [text,setText] = useState("")

    const dispatch = useDispatch()




  return (
    <div>
        <input type="text" onChange={(e)=>setText(e.target.value)} />
        <button onClick={()=>dispatch(addTodo(text))}>Add To Do</button>


    </div>
  )
}

export default InputBox