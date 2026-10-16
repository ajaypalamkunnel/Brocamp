

import React from 'react'
import useUpper from '../hook/UseUpper'

const Data = () => {

    let word = "ajay"

    const {upperize} = useUpper()

    let formatted = upperize(word);



  return (
    <div>{formatted}</div>
  )
}

export default Data