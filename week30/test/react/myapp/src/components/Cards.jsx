import React, { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {
  const [users, setUsers] = useState([]);

  const [viewBody, setViewBody] = useState(false);

  const [body,setBody] = useState("")
 

  const handleView = (id)=>{  
    console.log(id)
    const user = users.find((user)=>user.id===id)

    setBody(user.body)
    setViewBody(!viewBody)

    console.log("==>",body);

  }

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response.data);
      setUsers(response.data);
    }

    getData();
  }, []);

  return (
    <div>
      <div style={{border:"2px solid white"}}>
       {viewBody &&( <p>{body}</p>)}
      </div>
      {users.map((user) => (
        <div onClick={() => handleView(user.id)} key={user.id}>
          <h4>{user.userId}</h4>  
          <h4>{user.title}</h4>  
        </div>
      ))}

      
    </div>
  );
};

export default Cards;
