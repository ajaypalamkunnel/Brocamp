interface Book{
    bookId:number,
    name:string,
    cat:string
}


interface Author{
    authRegNo:number,
    AutName:string
}

type intersectType = Book&Author

let intersectTypeObject:intersectType = {
    bookId  :22,
    name:"ajay",
    cat:"action",
    authRegNo:343,
    AutName:"ONV"
}

console.log(intersectTypeObject);


//typeguard
let obj:{
    name:string
    age:number
}={name:"Ajay",age:3}
console.log(obj);



console.log("is name is in obj = ",('name' in obj));


