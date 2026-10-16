let arr = [1,0,24,0,6,0,7,8,6,24,10,3]
function isPrime(num){
    if(num<=1){
        return false;
    }
    for(i=2;i<=num/2;i++){
        if(num%i===0){
            return false;
        }
    }
    
    return true
}

let sum = arr.reduce((acc,val)=>{
   return acc = val+ acc;
},0)

if(sum>100){
    arr.filter((val,index)=>{
        if(isPrime(val)){
            arr.splice(index,1)
        }
    })
}else{
    arr.filter((val,index)=>{
        if(!isPrime(val)){
            arr.splice(index,1)
        }
    })
}

console.log(...arr)