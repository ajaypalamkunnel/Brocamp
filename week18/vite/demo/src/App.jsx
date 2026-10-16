import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/Parent'
import Counter from './components/Counter'
import Form from './components/Form'
import Task from './components/Task'
import Task2 from './components/Task2'
import Add from './components/Add'
import TaskCounter from './components/TaskCounter'
import Timer from './components/Timer'
import useRefDemo from './assets/Ref/useRef'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      


      {/* <useRefDemo/> */}






    </div>
  )
}

export default App



// import React, { useState} from 'react'
// import { UseEffect } from './components/UseEffect'
// import Unmount from './components/Unmount'
// import useRefDemo from './assets/Ref/useRef'

// function Child({fun}) {
//   return (
// 	<>
// 		<button onClick={fun} >Click</button>
// 	</>
//   )
// }

// function Parent() {

  
// const [count, setCount] = useState(0)

//   function handleChange(){
//     setCount(count+1)
//   }


// return (
//   <>
// 	  {/* <h1>Count : {count}</h1>
// 	  < Child fun={handleChange}/> */}

//     {/* <UseEffect/> */}

//     {/* <Unmount/> */}
//    <useRefDemo/>
//   </>
// )
// }

// export default Parent