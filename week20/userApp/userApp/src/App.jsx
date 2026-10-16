import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Provider} from 'react-redux'
import Form from './components/Form'
import ShowForm from './components/ShowForm'
import store from './redux/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>

      <div>
        <Form/>
        <ShowForm/>
      </div>

    </Provider>
  )
}

export default App
