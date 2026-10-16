function match(str){
    let stack = []

    for(let i of str){
        if(i === '('){
            stack.push(i)
        }else if(i === ')'){

            if(stack.length===0){
                return false
            }

            stack.pop()

        }
    }


    return stack.length === 0
}

console.log(match("((()())())"));
 