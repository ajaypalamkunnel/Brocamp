const array = [1, 2, 2, 3, 4, 4, 5];

let count = 0

for(let i = 0;i<array.length;i++){
    let count=1
    for(let j = i+1;j<array.length;j++){
        if(array[i]===array[j]){
            count++
        }
    }

    if(count>1){
        array[i]=null;
    }
}

array.forEach((element)=>{
    if(typeof element=== 'null'){
        console.log(array);

    }
})
