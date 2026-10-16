let arr = ['hi','hello','world','javascript']


let newArr = arr.map((item)=>{
    if(item.length > 2) {
        return item.charAt(0).toUpperCase() + item.slice(1)
    }else{
        return null
       
    }
}).filter((item)=>item!==null)

console.log(newArr);
