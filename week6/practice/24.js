let arr = [1,2,3,4,5,6,6,7]


function iterator(arr){

    let even = []

    arr.filter((value)=>{
        if(value%2===0){
            even.push(value)
        }
    })
    return new Promise((resolve,reject)=>{

        resolve(even);

    })
}

let even = iterator(arr);

even.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);
    
})