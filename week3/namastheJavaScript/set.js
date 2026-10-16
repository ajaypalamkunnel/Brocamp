const mySt = new Set()


mySt.add(343)

mySt.add({a:"one",b:"Two",c:"Three"})

console.log(mySt);

console.log(mySt.has(343));



mySt.forEach((data)=>{
    console.log(data);
    
})