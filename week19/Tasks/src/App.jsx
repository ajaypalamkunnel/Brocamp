import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UseReducerComponent from './Components/useReducer'
import UseReducerObj from './Components/UseReducerObj'
import UseRed from './PracticeComponents/UseRed'
import Home from './Components/Home'
import ThemeContext from './Context/ThemeContext'
import MemoCounter from './Components/MemoCounter'
import UseCallBackDemo from './Components/UseCallBackDemo'
import UseMemoDemo from './Components/UseMemoDemo'
import DemoLazy from './Components/DemoLazy'
import ColorContextProvider from './Context/ColorContext'
import Consumer from './Components/Consumer'
import DemoUseEffect from './Components/DemoUseEffect'
import DemoUserf from './Components/DemoUserf'
import PracticeUseReducer from './PracticeComponents/PracticeUseReducer'
import RDotMemoDemo from './Components/RDotMemoDemo'
import DemoUseEffectTwo from './Files/DemoUseEffect'
import ColorChanger, { GlobalColorContext } from './Context/colorChanger'
import DemoReducer from './Context/DemoReducer'

function App() {
  

  return (
    <>
      {/* <UseReducerComponent/> */}

      {/* <UseReducerObj/> */}

      {/* <UseRed/>
      <ThemeContext>
      <Home/>
      </ThemeContext>
       */}

       {/* <MemoCounter/> */}
       {/* <UseCallBackDemo/> */}

       {/* <UseMemoDemo/> */}
        <DemoLazy/>

        {/* <ColorContextProvider>
        <Consumer/>
        </ColorContextProvider> */}


        {/* <DemoUseEffect/>

        <DemoUserf/>
         */}


         {/* <PracticeUseReducer/> */}

         {/* <RDotMemoDemo/> */}


          <ColorChanger>
         <DemoUseEffectTwo/>
          </ColorChanger>

          <DemoReducer/>
        
        
    </>
  )
}

export default App
