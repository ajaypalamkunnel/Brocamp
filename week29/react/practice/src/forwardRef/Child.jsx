import React from 'react'
import { forwardRef } from 'react'

const Child = forwardRef((props,ref)=>{
    return <input type="text" ref={ref} placeholder='I am from Child component...' />
}) 
export default Child