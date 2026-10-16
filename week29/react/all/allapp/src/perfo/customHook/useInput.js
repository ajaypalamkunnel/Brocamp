

import React, { useState } from 'react'

const useInput = (initialValue) => {
    const [value ,setValue] = useState(initialValue)

    console.log(initialValue);
    
    

    const handleChange = (event) =>setValue(event.target.value)



  return {
    value,
    onChange:handleChange
  }
}

export default useInput