import React, { useState } from 'react'

function Task2() {

    let [formData,setFormData] = useState({
        number1:"",
        number2:"",

    })
    let [total,setTotal] = useState(0)


    function handleChange(eve){
        const {name,value} = eve.target
        setFormData({...formData,[name]:value});

    }



   function handleSubmit(eve){
        eve.preventDefault()
        setFormData(formData)

        let num1 = parseFloat(formData.number1);
        let num2 = parseFloat(formData.number2);
        setTotal(num1+num2)
        setFormData({number1:"",number2:""})

    }

  return (
    <div>
        <hr />


        <form onSubmit={handleSubmit}>
            <input name='number1' value={formData.number1} onChange={handleChange} type="number" />
            <input name='number2' value={formData.number2} onChange={handleChange} type="number" />

            <button type='submit'>Add</button>

        </form>

        <h2>Total : {total&&(total)}</h2>
    </div>
  )
}

export default Task2