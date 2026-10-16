let arr = [3,23,5,3,2,5,23,64,4,4,1]


let checker = (arr)=>{
    return new Promise((resolve,reject)=>{
        let sum = arr.reduce((acc,num)=>{
            acc+=num
            return acc
        },0)
        if(sum%2===0){
            resolve("Yes sum is even")
        }else{
            reject("oh sorry its odd Thank you better luck next time")
        }
    })
}

checker(arr)
.then(result=>console.log(result))
.catch(err=>console.log(err))