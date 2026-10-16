type Users = {
    name:string;
    email:string;
    isActive:boolean
}


function createUser(User:Users):Users{
    
    return User
}




console.log(createUser({name:"ajay",email:"ajay@gmail.com",isActive:true}));


console.log(createUser({name:"ajayps",email:"ajayps@gmail.com",isActive:true}));
