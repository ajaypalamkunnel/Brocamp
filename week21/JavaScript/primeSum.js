function isPrime(num){
    if(num<2){
        return false
    }
    
    for(let i = 2 ; i <= Math.sqrt(num);i++){
        if(num%i===0){
            return false
        }
    }
    
    return true
}


let arr = [1,24,5,56,7,77,4,3,7,8,5]

let sum = 0
arr.forEach((num)=>{
    
    if(isPrime(num)){
        sum += num
    }
    
    return sum
    
    
})

console.log(sum)