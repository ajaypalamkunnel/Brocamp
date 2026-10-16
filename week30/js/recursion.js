


// iterative
function printFibbi(n){ 
  let fib = [0,1] 
  for(let i = 2; i < n ;i++){
    fib[i] = fib[i-1]+fib[i-2]
  } 
  return fib  
}

console.log(printFibbi(10))



function fibbi(n){
  if(n <= 1){
    return n
  }
  return fibbi(n-1)+fibbi(n-2)
}


for(let i = 0 ; i < 10 ;i++){
  console.log(fibbi(i))
}





function sum(num){
  
  if(num <= 1){
    return num
  }
  
 
  return num+=sum(num-1)
  
}

console.log(sum(5))





