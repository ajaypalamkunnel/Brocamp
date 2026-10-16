

import React, { useState } from 'react'

const DebouncedSearch = () => {

    const [query,setQuery] = useState('')

    function deBounce(func,delay){
        let timer
        return function(...args){

        }
    }

    const handleSearch = (value)=>{
        console.log("Searching for:", value);
    }


    const handleChange = (e)=>{
        setQuery(e.target.value)
    }


  return (
    <div>
        <h1>{query}</h1>
        <input type="text" onChange={(e)=>handleChange(e)} />

    </div>
  )
}

export default DebouncedSearch