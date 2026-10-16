import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {buyIceCream,reStockIceCream} from '../features/iceCream/iceCreamSlice'
const IceCreamShop = () => {

    const numOfIceCreams = useSelector((state)=>state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
  return (
    <div>

        <h1>Number of Icreams: {numOfIceCreams}</h1>

        <button onClick={()=>dispatch(buyIceCream())}>Buy IceCreams</button>
        <button onClick={()=>dispatch(reStockIceCream(5))}>Restock IceCream</button>

    </div>
  )
}

export default IceCreamShop