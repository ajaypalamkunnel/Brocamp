import { createSlice } from "@reduxjs/toolkit";


const todoList = {
    tasks : []
}


const TodoSlice = createSlice({
    name:"todo",
    initialState:todoList,
    reducers:{
        addTodo:(state,actions)=>{
             console.log("hiii");
             let id = new Date
            const item = {id: id.toString(),task:actions.payload,status:false}
            state.tasks.push(item)
        },
        addAction:(state,actions)=>{
            console.log();
            
            let item = state.tasks.find((todo)=>todo.id===actions.payload)
            console.log(item);
            
            if(item){
                item.status = !item.status
            }

        }
    }

})

export const {addTodo,addAction} = TodoSlice.actions;
export default TodoSlice.reducer