import React, { forwardRef } from 'react'

const ForwardChild = forwardRef((props,ref) => {




  return <input type="text" ref={ref} placeholder='Enter somthing....' />

  
  
})

export default ForwardChild