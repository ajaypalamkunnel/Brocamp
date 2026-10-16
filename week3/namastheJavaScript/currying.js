function curringMulty(a){
    return function(b){
        return a*b;
    }
}

const double = curringMulty(2)

console.log(double(5));