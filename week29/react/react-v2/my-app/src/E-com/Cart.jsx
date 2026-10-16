import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems);
  
  return (
    <div>
      <h1>Your Cart</h1>

       {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            {item.name} - ₹{item.price}
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
