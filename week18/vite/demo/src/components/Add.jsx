import React, { useState } from 'react'

function Add() {

    const [formData,setFormData] = useState({
        num1:"",
        num2:""
    })

    const [total,setTotal] = useState(0)

    function handleChange(eve){
        let {name,value} = eve.target
        setFormData({...formData,[name]:value})
        
    }



    function handleSubmit(eve){
        eve.preventDefault()
        setFormData(formData)
        let n1 = parseFloat(formData.num1);
        let n2 = parseFloat(formData.num2);
        setTotal(n1+n2)
        setFormData({})

    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <input name='num1' value={formData.num1} onChange={handleChange} type="number" />
            <input name='num2' value={formData.num2} onChange={handleChange} type="number" /><br />
            <button type='submit'>add</button>
        </form>

        <h2>Total : {total&&(total)}</h2>

    </div>
  )
}

export default Add