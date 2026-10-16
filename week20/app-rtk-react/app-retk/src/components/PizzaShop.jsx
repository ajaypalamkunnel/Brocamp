import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyPizza, reStockPizza } from '../features/pizza/pizzaSlice'

const PizzaShop = () => {

    const numOfPizza = useSelector((state)=>state.pizza.numOfPizza)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Number of Pizza : {numOfPizza}</h1>

        <button onClick={()=>dispatch(buyPizza())}>Buy Pizza</button>
        <button onClick={()=>dispatch(reStockPizza(5))}>Restock pizza</button>
    </div>
  )
}

export default PizzaShop