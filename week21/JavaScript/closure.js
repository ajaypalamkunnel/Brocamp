function a(){
    let x = 10;

    return function b(){
        console.log(x);
        
    }
}

let value = a()

value()