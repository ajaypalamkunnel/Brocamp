import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {Provider} from 'react-redux'
import store from './store';
import CakeShop from './components/CakeShop';
import { Suspense } from 'react';
import { lazy } from 'react';
import UserData from './components/UserData';

const LazyComponent = lazy(()=>import('./components/LazyComp'))
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Provider store={store}>
        <CakeShop/>
      </Provider>

{/* 
      <Suspense fallback={<div>Loading......</div>}>
        <LazyComponent/>
      </Suspense> */}
      <UserData/>
    </div>

      
  )
}

export default App
