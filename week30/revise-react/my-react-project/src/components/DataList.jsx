

import React from 'react'

const DataList = ({data}) => {
    console.log(data);
    
  return (    

    <ul>
        {data.map((item)=>(
            <li>"dfsd",{item}</li>
        ))}
    </ul>

  )
}

export default DataList