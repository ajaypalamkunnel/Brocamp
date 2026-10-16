let arr = [1,24,-6,7,8,6,24,-10,3,20]
let sum=0
let c = 0;
let avg=0
let neg = []
let non = []
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i]<0){
        sum = sum + arr[i]
        c++;
    }
}

if(c>0){
    avg = sum/c
    console.log(avg)
}else{
    console.log(0)
}

arr.forEach((val)=>{
    if(val<0){
        neg.push(val)
    }else{
        non.push(val)
    }
})

console.log(neg.concat(non))