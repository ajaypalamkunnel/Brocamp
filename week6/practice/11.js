let products = [
    { name: "Product A", price: 30 },
    { name: "Product B", price: 60 },
    { name: "Product C", price: 40 }
];


let highPrice = products.filter((product)=>{
    return product.price>50
})

console.log(highPrice);
