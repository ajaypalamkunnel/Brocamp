
const removeDuplicate = (arr,set=new Set()) =>{
    
    for(let i = 0 ; i < arr.length ;i++){
        if(Array.isArray(arr[i])){
            
            arr[i] = removeDuplicate(arr[i],set)
            
        }else{
            
            if(set.has(arr[i])){
                
                arr.splice(i,1)
                i--

                
            }else{
                
                set.add(arr[i])
                
            }
            
        }
        
    }
    return arr
    
}


let arr = [45,7,88,[67,90,[45,67],7,4,4],[56,90],7,[7,88]]



console.log(removeDuplicate(arr))




    