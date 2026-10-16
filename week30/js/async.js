

  let response = fetch("http://jsonplaceholder.typicode.com/users")
  
  
let users = []
let address

response.then(response=>response.json())
.then((data)=>{
   data.forEach((user)=>users.push(user))
   
   let address =  users.map((data)=>data.address)

   console.log(address)
})
