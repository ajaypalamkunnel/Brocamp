import React, { useContext } from "react";
import { cartContext } from "../context/CartContextProvider";

const Products = () => {
  const products = [{name:"swift",price:100}, {name:"Polo",price:200}, {name:"Baleno",price:50},{name:"Bmw",price:1000}];

  const {addToCart} = useContext(cartContext)

  return (
    <>
      <h4>Products</h4>

      {products.map((product) => {
        return (
          <div style={{ width: "40px", height: "50px", padding:"20px", backgroundColor:"orange", margin:"3px"}}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={()=>addToCart(product)}>+</button>
          </div>
        );
      })}
    </>
  );
};

export default Products;
