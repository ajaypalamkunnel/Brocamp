function memoizedSquare(){
    let cache = {}
    return function square(num){
        
        if(num in cache){
            console.log("...featching from caching...")
            return cache[num]
        }else{
            console.log("..calculatiing")
            
            let result = num*num
            cache[num] = result;
            return result
            
        }
    }
}

let sq = memoizedSquare()

console.log(sq(5))
console.log(sq(5))
console.log(sq(5))
console.log(sq(25))
console.log(sq(25))