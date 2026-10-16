
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos:[]
}

export const TodoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log("helloo");
            
            state.todos.push({text:action.payload,status:false,id:Date.now()})

        },
        completeTodo:(state,action)=>{
            console.log("dsfsdf");
            
            let todo = state.todos.find((t)=>t.id==action.payload)
            if(todo){
                todo.status = !todo.state
            }
        }
    }

})

export const {addTodo,completeTodo} = TodoSlice.actions
export default TodoSlice.reducer