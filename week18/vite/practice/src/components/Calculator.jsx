import React, { useState } from 'react'

function Calculator() {

    const [formData,setFormData] = useState({
        num1:"",
        num2:""
    })

    

    const [result,setResult] = useState("")

    function handleChange(event){
        const {name,value} = event.target
        setFormData({...formData,[name]:value})
    }
    


    function caluculate(operator){
        event.preventDefault()
        if(operator==='+'){

            setResult(parseFloat(formData.num1)+parseFloat(formData.num2))
            
        }else if(operator === '-'){
            setResult(parseFloat(formData.num1)-parseFloat(formData.num2))
           
        }else if(operator === '*'){
            setResult(parseFloat(formData.num1)*parseFloat(formData.num2))
            
        }
    }



    


  return (
    <div style={{height:'500px',width:'400px',backgroundColor:'black',padding:'10px'}}>

        <form >
        <input name='num1' onChange={handleChange} value={formData.num1} type="number" />
        <input name='num2' onChange={handleChange} value={formData.num2} type="number" />
        <div style={{padding:'10px'}}>
        <button onClick={(e)=>{caluculate('+')}}>+</button>
        <button onClick={(e)=>{caluculate('-')}}>-</button>
        <button onClick={(e)=>{caluculate('*')}}>*</button>

        </div>

        </form>

        <h1>Result: {result&&(result)}</h1>


    </div>
  )
}

export default Calculator