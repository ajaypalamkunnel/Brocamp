let vo = "aeiou"
function check(words){
    let count = 0
    words.split("").forEach((word)=>{
        if(vo.includes(word.toLowerCase())){
            count++
        }
    })
    return count
}


let res = check("umberlla")

console.log(res)
