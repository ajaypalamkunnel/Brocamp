import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorPicker from './components/ColorPicker'
import Accordion from './components/Accordion'
import Welcome from './components/welcome'
import ClickCounter from './components/ClickCounter'
import ToggleVisibility from './components/ToggleVisibility'
import SimpleForm from './components/SimpleForm'
import UserData from './components/UserData'
import RegistrationForm from './components/RegistrationForm'
import Calculator from './components/Calculator'
import LoginForm from './components/LoginForm'
import HClickCouter from './HigherOrderComponents/HClickCouter'
import HoverComponent from './HigherOrderComponents/HoverComponent'
import Parent from './components/Parent'
import P1 from './components/P1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ColorPicker/>
    <Accordion/>

    
    <Welcome name="Ajay"/>
    <ClickCounter/>


    <ToggleVisibility/>

    <SimpleForm/>

    <UserData/>

    <RegistrationForm/>


    <Calculator/>

    <LoginForm/>


    <HClickCouter/>


    <HoverComponent/>

    <Parent/>

    <P1/>


     
    </>
  )
}

export default App
