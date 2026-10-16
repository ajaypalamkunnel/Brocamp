
function moveZerosToEnd(arr){
    let res = [];
    
    for(let i = 0;i < arr.length ; i++ ){
        if(arr[i]!==0){
            res.push(arr[i])
        }
    }
    
    while(res.length < arr.length){
        res.push(0)
    }
    
    console.log(res)
}

moveZerosToEnd([3,4,6,7,3,0,4,0])