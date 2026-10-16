
function showOnlyuniqueLetter(str){
    let strarr = str.split("");
    let res = []
    strarr.forEach((value,index)=>{
        if(strarr.indexOf(value) === strarr.lastIndexOf(value)){
            res.push(value)
        }
    })
    
    console.log(res)
}

showOnlyuniqueLetter("ajay")
