// let myMap = new Map()

// myMap.set(1,"one")
// myMap.set(2,"Two")
// myMap.set(3,"Three")
// myMap.set(4,"Four")

// console.log(myMap);//Map(4) { 1 => 'one', 2 => 'Two', 3 => 'Three', 4 => 'Four' }

// for(let key of myMap.keys()){
//     console.log(`key is ${key}`);
// }
// for(let value of myMap.values()){
//     console.log(`key is ${value}`);
// }
// for( let[key,value]  of myMap){
//     console.log(` ${key} ===== ${value}`);
// }

// myMap.forEach((value)=>{console.log(`${value}`);})



const Mymaps = new Map()

let keyString = "kekString",
keyObj = {},
keyFunction = function(){}; 

Mymaps.set(keyString,"Ith aanu value")
Mymaps.set(keyObj,"ith obj value")
Mymaps.set(keyFunction,"ith functionte value")

console.log(Mymaps.get(keyString));
console.log(Mymaps.get(keyObj));

//iterate map

for(let [key,values] of Mymaps){
    console.log(`Map keys  : ${key}, Vlaues: ${values}`);
    
}


//anaother method for Map creation

const NewMyMap = new Map([[1,"One"],[2,"Two"],[3,"Three"]])


NewMyMap.forEach((key,val)=>{
    console.log(`map Inte key : ${key} ------ map inte value ${val}`);
    
})

console.log(NewMyMap.has(1))