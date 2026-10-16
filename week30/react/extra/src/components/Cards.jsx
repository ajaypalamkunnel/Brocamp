import React, { useEffect, useState } from "react";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [count,setCount] = useState(0)
  const [user,setUser] = useState({})

  async function featchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");

    const data = await response.json();

    return data;
  }

  useEffect(() => {
    featchUsers().then((users) => {
      setUsers(users);  
    });
},[]);

console.log(count);



  const currentUser = users[count] || {}

  return <div>



    <div>

        <div style={{border:"solid 2px white"}}>
            <h3>{currentUser.userId}</h3>
            <p>{currentUser.title}</p>
        </div>
 
        <button onClick={()=>setCount((prev)=>Math.max(prev-1,0))} disabled={count==0}>Previous</button>
        <button onClick={()=>setCount((prev)=>Math.max(prev+1,0))} disabled={count==users.length-1}>Next</button>



    </div>




  </div>;
};

export default Cards;
