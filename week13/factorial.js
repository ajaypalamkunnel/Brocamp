function factorial(n){
    let fact = 1
    if(n===0){
        return 1
    }else{
        for(let i = 1 ; i <= n ; i++){
            fact = fact*i
        }
    }
    return fact


    
    
}
console.log(factorial(5))