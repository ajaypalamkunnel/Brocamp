// generic <T><U>

function getAge<T>(age:T):T{


    
        return age

    
}





getAge<string>('five')

console.log(getAge(4));
console.log();
console.log(getAge("30"));



let obj={
    name:'john',
    age:25
}

console.log(obj);



interface IGeneric<T,U,X>{
    value1:T;
    value2:U;
    value3:X
}

let obj1:IGeneric<number,string,boolean>={
    value1:10,
    value2:"dfdfd",
    value3:true
}