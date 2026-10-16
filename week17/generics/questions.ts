
// 1)
// function identity<T>(para:T):T{
//     return para
// }

// console.log(identity("dfdsfdsfsdf"));
// console.log(identity(34));


// 1)
// function reverseArray<T>(para:T[]):T[]{
//     return para.reverse()
// }


// console.log(reverseArray<string>(["A", "B", "C"])); // ["C", "B", "A"]
// console.log(reverseArray<number>([1, 2, 3])); // [3, 2, 1]



interface Container<T>{
    value:T
}

let myObj:Container<string> = {
    value:"Javascript"
}

let myobj2:Container<number>={
    value:3
}

function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key];
}