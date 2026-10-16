import { useState } from 'react'
 
import './App.css'
import Profile from './container/profile';
import About from './container/about';
import Services from './container/Services';
import { BrowserRouter,Router,Route, Routes, Link, data } from "react-router";
import { AppContext } from './context/appContext';
function App() {
  const [state, setState] = useState('Ajay')
  // let component;

  // if(state==='profile'){
  //   component = <Profile />
  // }

  // if(state === 'about'){
  //   component = <About />
  // }

  return (
    <>
     {/* <button onClick={()=>setState('profile')} >Profile</button>
     <button onClick={()=>setState('about')}>About</button>
      {component} */}

      

        <Link to='/profile'>Proflie</Link>
        <Link to='/about'>About</Link>
        <AppContext.Provider value={{data:state}}>
          
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
      </Routes>
        </AppContext.Provider>

      



    </>
  )
}

export default App
