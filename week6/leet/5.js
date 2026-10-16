let arr = [1,24,6,7,25,8,6,24,10,3]
console.log(...arr)
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

arr.filter((val,i)=>{
    if(isPrime(val)){
        arr.splice(i,1)
    }
})

console.log(...arr)