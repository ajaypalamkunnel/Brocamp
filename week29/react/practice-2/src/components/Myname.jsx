
import React from 'react'
import WithLogger from '../higho/WithLogger'

const Myname = () => {
  return (
    <div>
        Myname : 
        <h3>Ajay ps</h3>

    </div>
  )
}

export const MyNameWithLogger = WithLogger(Myname)