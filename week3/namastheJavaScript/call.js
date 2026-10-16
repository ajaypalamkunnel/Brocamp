//call

function getName(a,b,c){

  
  console.log("Name : ",this.name);
  console.log(a,b,c);
 
  
  
}

let myObj = {
  name: "ajay",
  age: 10,
 
};

//call comma seperated values edukkum
getName.call(myObj,"1","2","3")

//apply
//apply array arguements aayittu edukkum
getName.apply(myObj,["1","2","3"])

//bind

let newGetName = getName.bind(myObj)

newGetName()
