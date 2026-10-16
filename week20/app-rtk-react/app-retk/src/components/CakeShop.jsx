import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCake } from "../features/cake/cakeSlice";
const CakeShop = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
//   const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  console.log(numOfCakes);
  
  return (
    <div>
      <h1>Cake Shop</h1>
      <h2>Available Cakes: {numOfCakes}</h2>

      <button
        style={{ margin: "10px", padding: "10px 20px", cursor: "pointer" }}
        onClick={() => dispatch(buyCake())}
      >
        Buy cake
      </button>

      <button
      onClick={()=>dispatch(restockCake(5))}
      >Restock 5 cakes</button>


    </div>
  );
};

export default CakeShop;
