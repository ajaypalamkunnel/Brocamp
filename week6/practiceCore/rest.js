

function add(...args){
    let sum =0
    for(let i = 0;i<args.length;i++){

        sum=sum+args[i];

    }
    console.log(sum);
}

add(1,2,3,4,5,6)