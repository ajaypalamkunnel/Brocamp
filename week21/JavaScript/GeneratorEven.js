function* evenGenerator(limit=10){
    for(let i = 0 ; i < limit;i+=2){
        yield i
    }
}

let genEven = evenGenerator(100)


for(let num of genEven){
    console.log(num)
}