import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegtrationForm from './Components/RegtrationForm'
import ColorChanger from './Components/ColorChanger'
import UserData from './Components/UserData'
import Prop from './Components/prop'

import Refe from './Components/Ref'
import Calc from './Components/Calc'
import FeedBackForm from './Components/FeedBackForm'
import Counter from './Components/Counter'
import User from './Components/User'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    {/* <RegtrationForm/>

    <ColorChanger/>

    <UserData/>

    <Prop name={'Ajay'} age={12}/>

    <Refe/> */}

    {/* <Calc/>

      
    <FeedBackForm/>

      

    <Counter/> */}

    <User/>
    
   </div>
  )
}

export default App
