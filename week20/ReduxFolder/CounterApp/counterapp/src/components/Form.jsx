import React from 'react'
import { useDispatch } from 'react-redux';
import submitForm from '../redux/Form/formAction';

const Form = () => {
    const [name, setName] = React.useState('');
    const [age,setAge] = React.useState('')
    const dispatch = useDispatch()
  return (
    <div>
        <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Name'
        
        />
        <input
        type='number'
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        placeholder='Enter Age'
        
        />

        <button onClick={()=> dispatch(submitForm({name,age}))}>submit</button>
    </div>
  )
}

export default Form