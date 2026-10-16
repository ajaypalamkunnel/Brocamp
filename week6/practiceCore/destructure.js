const user = {
    name: "Alice",
    address: {
      city: "Wonderland",
      zip: "12345"
    }
  };


function add(...res){
    console.log(`Name: ${res[0]} = address: ${res[1]}`);
    
}

add(user);