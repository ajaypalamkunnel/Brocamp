

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction, addTodo } from './TodoSlice'

const Todo = () => {


    const todos = useSelector((state)=>state.todo.tasks)
    const [task,setTask] = useState("")

    // console.log(task);
    console.log(todos);
    
    

    const dispatch = useDispatch()

    const handleAddTask = () =>{
        // console.log("hiii");
        dispatch(addTodo(task))
    }

    const handleAction = (id) =>{
        dispatch(addAction(id))
    }

 

  return (
    <div>
        <h3>Todo app</h3>
        <div style={{gap:"20px", }}>
        <input onChange={(e)=>setTask(e.target.value)} type="text" style={{height:"50px", width:"300px"}}/> <br/>
        <button onClick={handleAddTask} style={{height:"50px", width:"150px", marginLeft:"20px", marginTop:"20px"}}>Add Task</button>

        {
            todos.map((todo)=>(

                <div style={{border:"blue 3px solid" ,marginTop:"20px"}} key={todo.id}>
                    <h4>{todo.task}</h4>
                    <input type="checkbox" onClick={()=>handleAction(todo.id)}/>
                </div>

            ))
        }

        </div>

    </div>
  )
}

export default Todo