import React from 'react'
import { useState } from 'react'

const Calc = () => {

    const [formData,setFormData] = useState({
        number1:"",
        number2:""
    })

    const [res,setRes] = useState(null)

    function handleChange(event){

        const {name,value} = event.target;

        setFormData({...formData,[name]:value})

    }

    function handleSubmit(event,op){
        event.preventDefault()

        let num1 = parseFloat(formData.number1)
        let num2 = parseFloat(formData.number2) 
        console.log(event);
        
        if(op === '+'){
            setRes(num1+num2)
        }else if(op === '-'){
            setRes(num1-num2)
        }else if(op === '*'){
            setRes(num1*num2)
        }else{
            setRes('Invalid operator')
        }

        formData(setFormData({
            number1:"",
            number2:""
        }))

        
    }
  return (
    <div style={{display:'flex',flexDirection:'column', marginTop:'5px'}}>

        <h1>Calculator</h1>
        <form onSubmit={handleSubmit}>
        <label>
            Num1:
            <input name='number1' value={formData.number1}  onChange={handleChange} type="number" />
        </label>
        <label>
            Num2:
            <input name='number2' value={formData.number2}  onChange={handleChange} type="number" />
        </label>

        <div style={{marginTop:'20px'}}>
            <button onClick={()=>handleSubmit(event,'+')} type='submit'>Add</button>
            <button onClick={()=>handleSubmit(event,'-')} type='submit'>sub</button>
            <button onClick={()=>handleSubmit(event,'*')} type='submit'>mul</button>
        </div>

        </form>

        {res&&(<h1>Result: {res}</h1>)}
        
    </div>
  )
}

export default Calc