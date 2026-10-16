import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../features/cakeShop/cakeSlice'

const CakeShop = () => {


    const numberOfCakes = useSelector((state)=>state.cake.numberOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Cake shop</h1>
        <h5>Available cakes : {numberOfCakes}</h5>
        <button onClick={()=>dispatch(buyCake())}>Buy cake</button>


    </div>

  )
}

export default CakeShop