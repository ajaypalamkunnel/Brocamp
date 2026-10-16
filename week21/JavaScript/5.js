let arr = [4,66,3,22,6,77,4,89]



let res = arr.reduce((acc,num)=>{

    if(num > acc.largest){

        acc.secondLargest = acc.largest;
        acc.largest = num

    }else if(num > acc.secondLargest && num < acc.largest){
        acc.secondLargest = num
    }

    return acc
   
}, {largest: -Infinity,secondLargest: -Infinity})

console.log(res.secondLargest);
