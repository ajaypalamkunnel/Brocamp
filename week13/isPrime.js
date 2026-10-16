function isPrime(n){
    if(n<2){
        return false
    }else{
        for(let i = 2 ; i < n ; i++){
            if(n%i===0){
                return false;
            }
        }
    }
    return true;
}

console.log(isPrime(5));


//Complexity Big-O = O(n)




function isPrime(n){
    if(n<2){
        return false
    }else{
        for(let i = 2 ; i < Math.sqrt(n) ; i++){
            if(n%i===0){
                return false;
            }
        }
    }
    return true;
}

console.log(isPrime(5));

//Complexity Big-O = O(sqrt(n))