import { createContext, useState } from "react";
import React from "react";

export const cartContext = createContext();

const CartContextProvider = ({children}) => {

  const [cart,setCart] = useState([])
  const [cartSummary,setCartsummary] = useState(0)

  const addToCart = (item) => {
    
    const updatedCart = [...cart,item]

    setCart(updatedCart)

    let total = cart.reduce((acc,item)=>{
      acc += item.price
      return acc
    },0)

    setCartsummary(total)
  };

  

  console.log(cart);
  

  return (
    <cartContext.Provider value={{cart,addToCart,cartSummary}}>
      {children}
    </cartContext.Provider>
  )
  
};

export default CartContextProvider;
