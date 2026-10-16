import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchData } from '../features/FetchData'

const User = () => {

    const dispatch = useDispatch()

    const {data,status} = useSelector((state)=>state.user)

    console.log(data)




  return (
    <div>

        <h2>User Data</h2>

        <p>{status}</p>

        <button onClick={()=>dispatch(fetchData())}>fetch User</button>

        {status==="succeed"&&(

           <div>
            <p>Name:{data.name}</p>
           </div>


        )}






    </div>
  )
}

export default User