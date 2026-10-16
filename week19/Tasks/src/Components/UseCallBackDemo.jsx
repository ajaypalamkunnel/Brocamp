import React, { useCallback, useState } from 'react'
import Title from '../parts/Title'
import Count from '../parts/Count'
import Button from '../parts/Button'

const UseCallBackDemo = () => {

    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(5)
    
    const incrementCount1 = useCallback( ()=>{
        setCount1(count1+1)
    },[count1])

    const IncrementCount2 =useCallback(()=>{
        setCount2(count2+1)
    },[count2])

  return (
    <div> 
        <Title/>
        < Count text='Counter1' count={count1}/>
        <Button handleClick={incrementCount1}>Increment count1</Button>
        <Count text='Counter2' count={count2}/>
        <Button handleClick={IncrementCount2}>Increment count2</Button>

    </div>
  )
}

export default UseCallBackDemo