import React, { useContext } from 'react'
import { cartContext } from '../context/CartContextProvider'

const CartSummary = () => {

    const {cartSummary} = useContext(cartContext)


  return (
    <div>
        CartSummary

        <h1>Total amount : {cartSummary}</h1>

        

    </div>
  )
}

export default CartSummary