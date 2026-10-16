//array destructuring

let arr = [1,2,3,4,5,[1.2,2.2,3.3]];

let [one,two,three,four,five,[dc1,dc2,dc3]] = arr

console.log(one);

console.log(dc1);



//object destructuring

let obj1 = {
    state : "Kerala",
    language: "Malayalam",
    pop:"2343242",
    air: {
        a1:"trv",
        a2:"COk"
    }
}

let {state,language,pop,air:{a1,a2}} = obj1

console.log(state);


console.log(a1);
