// JS WorkOuts


// Sum of all elements.

let arr = [23,46,{a:5,b:28,c:12},[12,90,49,[20,{a:40,b:90}]]]


function getSum(element){
    let sum =0;
    if(typeof element === 'number')sum+=element;
    else if(Array.isArray(element)){
        for(let key of element){
            sum+=getSum(key);
        }
    }else if(typeof element ==="object"){
        for(let key in element){
            sum+=getSum(key)
        }
    }
    return sum;
}

console.log(getSum(arr))



// Print a Star pyramid


for(let i =0;i<5;i++){
    let row = "";
    for(let j=0;j<10;j++){
        row += j<=5+i && j>=5-i ? "*" : " "
    }
    console.log(row)
}


//


// Date after 5 days

let date = new Date();
date.setDate(date.getDate()+1)
console.log(date.toDateString())


// Time after 5 hours

let now  = new Date()
let five = new Date(now.getTime() + ( 5 * 60 * 60 * 1000 ))

console.log(now.toLocaleTimeString("en-IN",{timeZone:'Asia/Kolkata'}))

console.log(five.toLocaleTimeString('en-IN',{timeZone:'asia/Kolkata'}))



// Reduce custom prototype

let arr = [1,2,3,4,5,6,7,8,9];

Array.prototype.myReduce = function(callback,initialValue){
    let accumilator = initialValue;
    let index = 0;
    if(!accumilator){
        accumilator = this[0];
        index = 1;
    }
    
    for(let i=index;i<this.length;i++){
        accumilator = callback(accumilator,this[i]);
    }
    
    return accumilator;
}

console.log(arr.myReduce((acc,curr)=>acc+curr))


// Filter Custom prototype

Array.prototype.myFilter = function(callback){
    let out = [];
    
    for(let i=0;i<this.length;i++){
        if(callback(this[i]))out.push(this[i])
    }
    return out
}

let arr = [1,2,3,4,5,6,7,8,9]

let even = arr.myFilter((x)=>x%2==0)

console.log(even)


// Proxy object

const user = {
  name: "Akhil",
  age: 22
};

const handler = {
  get(target, prop) {
    console.log(`Getting ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    target[prop] = value;
    return true;
  }
};

const proxyUser = new Proxy(user, handler);
console.log(proxyUser.name)
console.log(proxyUser)
proxyUser.gender = "M"




// Target index of 2d array

function searchMatrix(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0, right = rows * cols - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / cols);
        let col = mid % cols;
        let midVal = matrix[row][col];

        if (midVal === target) return [row, col];
        else if (midVal < target) left = mid + 1;
        else right = mid - 1;
    }

    return [-1, -1];
}

let array = [
  [1,2,4],
  [5,7,9],
  [12,34,45]
];
console.log(searchMatrix(array, 9));  // Output: [1,2]

