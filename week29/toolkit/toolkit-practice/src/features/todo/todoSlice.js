import { createSlice } from "@reduxjs/toolkit";


let id = 1

const todoSlice = createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            console.log("--",action.payload);
            
            state.push({_id:id++,text:action.payload,completed:false})
        },
        toggleTodo:(state,action)=>{
            const todo = state.find((t)=>t._id===action.payload)
            if(todo)todo.completed = !todo.completed
        },
        deleteTodo:(state,action)=>{
           return  state.filter(t=>t._id !== action.payload)
        }
    }


})


export const {addTodo,toggleTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer