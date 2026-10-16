
import React from 'react'
import './App.css'
import { useForm } from './useForm';
import { useState,useEffect } from 'react';
import Test from './Test';
import Car from './Car';
import Usage from './Hooks/Usage';
import JustInfo from './Hooks/JustInfo';
import HookTimer from './Hooks/HookTimer';
import PersonalCounter from './Hooks/PersonalCounter';
import FetchData from './Hooks/FetchData';
import UserInfo from './Hooks/UserInfo';

function App() {
  //state

  const [value,handleChange] = useForm({
    name:"",
    email:""
  })

  // useState normal use
  // const [fname,setfname] = React.useState("");
  // const [email,setEmail] = React.useState("");

  // const resetName = ()=>{
  //   setName("")
  // }

  console.log(value.name);
  console.log(value.email);


  //useEffect

  useEffect(()=>{
    console.log('Runningggg');

    //clean up function like //ComponentWilUnmount()
    return (()=>{
      console.log("unmount");
      
    })
    
  },[value.name])
  //ee square bracket koduthillengil eppozhum render cheythondirikkum
  //ee square braclket ill value koduthala aa variable ill change varumbo mathram ath re rendere cheyyum
  //like componentWillDidUpdate

  const [showTest,setShowTest] = useState(true)
 
  
  return (
    <div>
      {/* <h1> Hi {name}</h1> */}
      <button>Reset</button>

      <p>This is a sample functionality to learn the concept of useEfect</p>

      {showTest ? <Test/> : null}
      <button onClick={()=>setShowTest(!showTest)} >Remove Toggle</button>

      <p>{value.name}</p>
      <p>{value.email}</p>

      <h5>Form</h5>
      <form action="">
        <input type="text" name='name' value={value.name} onChange={handleChange} />
        <input type="email" name='email' value={value.email} onChange={handleChange}/>
      </form>


      <Car/>


      <Usage/>

      <h4>Demonstaration of useMemo</h4>


    {/* <JustInfo/> */}


    <p>Timer</p>

    <HookTimer/>

    <PersonalCounter/>


    <FetchData/>

    <UserInfo/>

     </div>

  )
}

export default App
