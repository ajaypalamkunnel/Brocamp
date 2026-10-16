const fs = require('fs')

const electronics = [
    {
      id: 1,
      name: "Smartphone",
      brand: "Samsung",
      price: 25000,
      category: "Mobile",
      stock: 50,
    },
    {
      id: 2,
      name: "Laptop",
      brand: "Dell",
      price: 60000,
      category: "Computers",
      stock: 20,
    },
    {
      id: 3,
      name: "Tablet",
      brand: "Apple",
      price: 45000,
      category: "Mobile",
      stock: 15,
    },
    {
      id: 4,
      name: "Smartwatch",
      brand: "Noise",
      price: 5000,
      category: "Wearable",
      stock: 100,
    },
    {
      id: 5,
      name: "Headphones",
      brand: "Sony",
      price: 7000,
      category: "Audio",
      stock: 60,
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      brand: "JBL",
      price: 9000,
      category: "Audio",
      stock: 30,
    },
    {
      id: 7,
      name: "Television",
      brand: "LG",
      price: 55000,
      category: "Home Appliance",
      stock: 10,
    },
    {
      id: 8,
      name: "Refrigerator",
      brand: "Whirlpool",
      price: 40000,
      category: "Home Appliance",
      stock: 8,
    },
    {
      id: 9,
      name: "Gaming Console",
      brand: "Sony PlayStation",
      price: 50000,
      category: "Gaming",
      stock: 12,
    },
    {
      id: 10,
      name: "Camera",
      brand: "Canon",
      price: 30000,
      category: "Photography",
      stock: 18,
    },
  ];



const getData = async (query) => {

    console.log(query);
    
  
    let data = electronics.filter(obj=>obj.category.toLowerCase()=== query)
    

    fs.writeFileSync(`${query}.pdf`,JSON.stringify(data),()=>{
        console.log("data stored");
        
    })
    
    return data
};


module.exports = {getData}