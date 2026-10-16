function add(a){
    return function(b){
        return a+b
    }
}

let res = add(10)


console.log(res(5))



/////////////////////////////////
// remove the brace
{


    function add(a){
        return function(b){
            return function(c){
                return a+b+c
            }
                
        }
    }
    
    let res = add(10)
    let res2 = res(10)
    
    
    console.log(res2(5))


}

