import React from 'react'
import { useSelector } from 'react-redux'

const ShowForm = () => {
  const { name, age } = useSelector((state) => state.form || {})

  return (
    <div>
      <h1>Form Data</h1>
      <p>
        Name: {name || 'Not Provided'}
      </p>
      <p>
        Age: {age || 'Not Provided'}
      </p>
    </div>
  )
}

export default ShowForm