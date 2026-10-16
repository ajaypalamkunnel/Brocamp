import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Actions from './perfo/react.memo/actions'
import Calc from './perfo/useMemo/Calc'
import UseApp from './perfo/useCallback/UseApp'
import Focus from './perfo/useRef/Focus'
import Timer from './perfo/useRef/Timer'
import Home from './perfo/lazyLoading/Home'
import Main from './perfo/useContext/Main'
import Dashboard from './perfo/higherOrderCom/Dashboard'
import Form from './perfo/customHook/Form'
import Counter from './perfo/customHook/Counter'
import TitleChanger from './components/TitleChanger'

function App() {
  
  return (
    <>
    <p>react.memo</p>
    <Actions/>

    <p>usememo</p>

    <Calc/>

    <p>useCallback</p>

    <UseApp/>

    <Focus/>

    <Timer/>

    <Home/>

    <Main/>

    <Dashboard/>

    <Form/>


    <Counter/>

    <TitleChanger/>
    </>
  )
}

export default App
