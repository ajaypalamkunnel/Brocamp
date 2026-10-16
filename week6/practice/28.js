let arr = [12,3,24,2,3,3,8,8,24,12]
function findDuplicate(arr){
    const seen = new Set();
    const duplicate = new Set();


    arr.forEach((value)=>{
        if(seen.has(value)){
            duplicate.add(value);
        }else{
            seen.add(value);
        }
    })

    return Array.from(duplicate);

}

let duplicates = findDuplicate(arr);

console.log(duplicates);
