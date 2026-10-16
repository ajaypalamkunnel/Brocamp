import { lazy, Suspense, useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Form from './components/Form'
import Counter from './components/Counter'
import Navigation from './components/Navigation'
import Fruits from './components/Fruits'
import Parent from './perfo/memo/Parent'
import UseMemo from './perfo/usememo/UseMemo'

function App() {
  

  const Form = lazy(()=>import("./components/Form"))
  const ReduxCounter = lazy(()=>import("./components/Counter"))
  const LFruit = lazy(()=>import("./components/Fruits"))
  const LDebouncing = lazy(()=>import("./components/Debouncing"))

  return (
    <>
    
    <Router>
      <Suspense fallback={<p>Loading....</p>}>

      <Routes>
        <Route path='/' element={<Navigation/>}/>
        <Route path='/country' element={<Form/>}/>
        <Route path='/redux' element={<ReduxCounter/>}/>
        <Route path='/fruits' element={<LFruit/>}/>
        <Route path='/debounce' element={<LDebouncing/>}/>
        <Route path='/memo' element={<Parent/>}/>
        <Route path='/usememo' element={<UseMemo/>}/>

      </Routes>

      </Suspense>

    </Router>

    

   
     
    </>
  )
}

export default App
