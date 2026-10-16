import React, { useEffect, useState } from "react";

const Fruits = () => {
  const fruits = [
    { id: 1, name: "Apple", color: "Red", price: 100, quantity: 50 },
    { id: 2, name: "Banana", color: "Yellow", price: 40, quantity: 100 },
    { id: 3, name: "Mango", color: "Orange", price: 120, quantity: 30 },
    { id: 4, name: "Grapes", color: "Green", price: 90, quantity: 70 },
    { id: 5, name: "Pineapple", color: "Brown", price: 150, quantity: 20 },
  ];

  const [selectedFruit, setSelectedFruit] = useState(null);
  const [display,setDisplay] = useState(null)

  useEffect(()=>{

    let data = fruits.find((item)=>item.name==selectedFruit)

    setDisplay(data)

  },[selectedFruit])

  console.log(selectedFruit)
  return <div>
    <h2>Select fruit</h2>
    <select name="" id="" onChange={(e)=>setSelectedFruit(e.target.value)}>
        {
            fruits.map((fr)=>(
                <option value={fr.name}>{fr.name}</option>
            ))
        }
        Fruit
    </select>
    <div>
        {
            display&&(
                <div style={{border:"4px solid orange", marginTop:"20px"}}>
                    <p>{display.name}</p>
                    <p>{display.color}</p>
                    <p>{display.price}</p>
                    <p>{display.quantity}</p>
                </div>
            )
        }
    </div>
  </div>;
};

export default Fruits;
