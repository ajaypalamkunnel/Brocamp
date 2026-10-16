function resFunSum(...res:number[]):number{
    let sum:number = 0

    for(let num of res){
        sum += num 
    }
    return sum
}


console.log(resFunSum(4,6,323,543,));
 