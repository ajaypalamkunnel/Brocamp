let arr = [1,0,24,0,6,0,7,25,8,6,24,10,3]


index = 0;
for(let i = 0 ; i<arr.length ; i++){
    if(arr[i]!==0){
        arr[index] = arr[i];
        index++
    }
}

for(let j = index ; j < arr.length ; j++){
    arr[j]=0;
}


console.log(...arr) 