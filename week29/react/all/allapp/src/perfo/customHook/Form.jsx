

import React from 'react'
import useInput from './useInput'

const Form = () => {
    const username = useInput("")
  return (
    <div>

        <label htmlFor="UserName: ">Username</label>
        <input type="text" {...username} />

    </div>
  )
}

export default Form