import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

const Products = () => {
  const products = [
    { id: 1, name: "Apple", price: 20 },
    { id: 2, name: "Orange", price: 30 },
    { id: 3, name: "Banana", price: 10 },
  ];

  const {addToCart} = useContext(CartContext)
  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>
            {product.name} - {product.price}
          </span>

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
