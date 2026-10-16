import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

const HookCakeShop = (props) => {

    const numOfCakes = useSelector(state=>state.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h1> HookCakeShop {props.name}</h1>
        <hr />
        <h1>NUmber of cakes {numOfCakes}</h1>

        <button onClick={()=>dispatch(buyCake())}>Buy cake from hook</button>
       
    </div>
  )
}

export default HookCakeShop