// function removeVowel(str){
//     let vowel = "aeiouAEIOU";
//     let arr = str.split("")
    
//     arr.forEach((value,index)=>{
//         if(vowel.includes(value)){
//            arr.splice(index,1)
//         }
//     })
    
//     console.log(arr)
// }
// console.log(removeVowel("kerala"))



function removeDuplicate(arr){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr.length ; j++){
            if(arr[i] === arr[j] && i !== j){
                arr.splice(j,1)
                //arr.splice(i,1)
            }
        }
    }

    console.log(arr);
    
}
removeDuplicate([3,4,5,6,6,9,4])