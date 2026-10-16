

import React, { createContext, useState } from 'react'

export const todoContext = createContext()
const TodocontextProvider = ({children}) => {

    const [data,setData] = useState([])

    const addTodo =(data)=>{
        setData((prev)=>[...prev,{id:new Date().getTime(),data}])

    }

    const remove = (id)=>{
        setData((prev)=> prev.filter((todo)=>todo.id!==id))
    }

  return (
    <todoContext.Provider value={{data,addTodo,remove}}>
        {children}
    </todoContext.Provider>
  )
}

export default TodocontextProvider