let myMap = new Map()

myMap.set(1,'one')
myMap.set(2,'two')
myMap.set('moonnu','three')
myMap.set(4,'four')


for(let [key,value] of myMap){
    console.log(`Key is ${key} == for of== value is ${value}`);
    
}

