interface value{
    num1:number
    num2:number
    num3:number
}


interface value2{
    num1?:number
    num2?:number
}
let myobj:Partial<value>={
    num1:34,
    num2:4
}

console.log(myobj);



let obj11:Required<value2>={
    num1:43,
    num2:3
}

//required example

interface User {
    id?: number;
    name?: string;
    email?: string;
  }
  
  const logUser = (user: Partial<User>) => {
    console.log(user.id, user.name, user.email);
  };
  
  // The function now requires all properties to be present.
  logUser({ id: 1, name: "Ajay", email: "ajay@example.com" });
  



  