import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from './filterSlice'

const FilterButtons = () => {


    const filter = useSelector(state=>state.filter)
    const dispatch = useDispatch()
  return (
    <div style={{margin:"10px 0"}}>

        <button onClick={()=>dispatch(setFilter("all"))} disabled={filter==="all"}>All</button>
        <button onClick={()=>dispatch(setFilter("completed"))} disabled={filter==="completed"}>completed</button>
        <button onClick={()=>dispatch(setFilter("incomplete"))} disabled={filter==="incomplete"}>incomplte</button>
        
    </div>
  )
}

export default FilterButtons