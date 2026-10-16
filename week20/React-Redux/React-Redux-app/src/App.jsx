import './App.css'

import {Provider} from 'react-redux'
import store from './redux/store'

import IceCreamContainer from './components/IceCreamContainer'
import CakeContainer from './components/CakeContainer'
import PizzaContainer from './components/PizzaContainer'
function App() {
  

  return (
    <Provider store={store}>
    <div>

      <CakeContainer/>
      {/* <HookCakeShop name={"cakeworld"}/> */}

      <IceCreamContainer/>

      <PizzaContainer/>

    </div>
    </Provider>
  )
}

export default App
