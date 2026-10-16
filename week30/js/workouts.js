




let arr = [0,3,2,3,4,5,6,7,8,9];

Array.prototype.myReduce = function(callback,initialValue){
    let accumilator = initialValue;
    let index = 0;
    if(!accumilator){
        accumilator = this[0];
        index = 1;
    }
    
    for(let i=index;i<this.length;i++){
                        //(acc,curr=>acc+=cur)
        accumilator = callback(accumilator,this[i]);
    }
    
    return accumilator;
}

console.log(arr.myReduce((acc,curr)=>acc+curr))





// remove even duplicates inplace method, O(n)
let arr = [3,4,55,2,3,7,8,4,10,12]
let obj = {}
// console.log(arr)
let k  = 0

for(let i = 0 ; i <arr.length;i++){
  let val = arr[i]
  if(arr[i]%2!==0){
    arr[k++] = val
  }else if (!(val in obj)){
    obj[val] = true;
    arr[k++] = val;
  }
 
  
}

arr.length = k

console.log(arr)



//---------------------------------------


function reverseWord(word){
  
  if(word.length===0){
    return ""
  }
  
  return reverseWord(word.slice(1))+word[0]
  
}


function reverseSentence(sentance){
  
  let words = sentance.split(" ")
  
  for(let i = 0 ; i < words.length ;i++){
    words[i] = reverseWord(words[i])
  }
  
  return words.join(" ")
}

//yaja sp
console.log(reverseSentence("ajay ps"))



//---------------------------------------


let numbers = [3, 8, 12, 5, 7, 12];


let secondLargest = numbers.reduce((acc,num)=>{
  
  let [first,second] = acc;
  
  if(num > first){
    
    second = first;
    first = num
  }else if(num < first && num > second){
    
    second = num
    
  }  
  return [first,second]
  
},[-Infinity,-Infinity])

console.log(secondLargest[1])




// -----------------------------

//uncommon elements

let arr = [3,2,9,1,8,5]
let arr2 = [8,2,5,3,1,] //8,9,5,1
let l = Math.max(arr.length,arr2.length)
let unc = []

for(let i = 0 ; i < l ;i++){
  let com = false
  let com2 = false
  for(let j = 0 ; j < l;j++){
    
    if(arr[i]==arr2[j]){
      com = true
    }
    
    if(arr2[i]==arr[j]){
      com2 = true
    }
    
  }
  
  if(!com){
    if(arr[i]){
    unc.push(arr[i])
      
    }
  }
  if(!com2){
    if(arr2[i]){
    unc.push(arr2[i])
      
    }
  }
  
}

console.log(unc)


// ebe56785-be3e-450c-b7a9-a3508c35d205.db47471219c27ccd8bb53f803fc4ab757b77d454696c9c845507ef8c7b56962c

let arr = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32],
  [33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48],
  [49, 50, 51, 52, 53, 54, 55, 56],
  [57, 58, 59, 60, 61, 62, 63, 64]
]

let count = 0;

for(let row = 1 ; row < arr.length;row+=2){
  let seq = row
  for(let col = 0 ; col < arr.length;col++){
      console.log(arr[seq][count++])
      if(col%2!==0){
        seq++
      }else{
        seq--
      }
    
  }
  count = 0
}


// ----------------------------------------------

function* generateEven(start=2){
  
    let i = start
    
    while(true){
      yield i
      i+=2
    }
  
  
}

let even = generateEven(2)

for(let i = 1 ; i <= 10 ;i++){
  console.log(even.next().value)
}


var x = {
  id: 101,
  name: "John Doe",
  isActive: true,
  scores: [85, 92, 78], // array of numbers
  tags: ["developer", "javascript", "fullstack"], // array of strings
  profile: {
    age: 30,
    email: "john.doe@example.com",
    preferences: {
      darkMode: false,
      notifications: true,
      themes: ["light", "dark", "solarized"], // array of strings
    },
    projects: [
      {
        name: "Project Alpha",
        completed: true,
        contributors: [1001, 1002], // array of numbers
      },
      {
        name: "Project Beta",
        completed: false,
        contributors: [1003, 1004], // array of numbers
      }
    ] // array of objects
  }
};

//------------------------------------------------
 // GET KEY 
 function getKey(obj,value){
  
  
  for(let key in obj){
     
    if(value === obj[key]){
         return key   
     }
     
     if(Array.isArray(obj[key])){  
        for(let item of obj[key]){
          if(item === value){
            return key
          }
        }  
     }

     if(typeof obj[key] === "object" && obj[key] !== null){  
       let result = getKey(obj[key],value)      
       if(result){
         return result
       }
       
     }
     
   }
   
   return null
 }
 
console.log(getKey(x,"john.doe@example.com") )



//------------------------------------------------
// COUNT KEYS

function countKeys(obj){
  let count = 0
  for(let key in obj){
    count++;
    let curr = obj[key];
    if(typeof curr === "object" && curr !== null){
      if(Array.isArray(curr)){        
        for(let item of curr){
          if(typeof item === "object" && item !== null){
            count += countKeys(item)
          }
        }
      }else{
        count+= countKeys(curr)
      }
    }
  } 
  return count  
} 

 
//------------------------------------------------
 
 
 const players = [
  {
    name: "Virat",
    odi: { total: 33.32, avg: 56.21, runs: 7890 },
    t20: { total: 25.12, avg: 50.10, runs: 3450 },
    test: { total: 40.25, avg: 49.56, runs: 8700 }
  },
  {
    name: "Rohit",
    odi: { total: 31.11, avg: 50.45, runs: 8450 },
    t20: { total: 28.22, avg: 45.80, runs: 3850 },
    test: { total: 38.90, avg: 46.20, runs: 7200 }
  },
  {
    name: "Dhoni",
    odi: { total: 40.55, avg: 51.32, runs: 10200 },
    t20: { total: 35.15, avg: 38.44, runs: 1617 },
    test: { total: 50.00, avg: 38.09, runs: 4876 }
  },
  {
    name: "KL Rahul",
    odi: { total: 28.55, avg: 45.12, runs: 5600 },
    t20: { total: 30.10, avg: 39.55, runs: 2600 },
    test: { total: 33.77, avg: 40.33, runs:4200}
}
];



let res = players.reduce((acc,obj)=>{
  
  let myName = obj.name
  let avgTotal = 0
  for(let item in obj){
    if(obj[item].avg){
      avgTotal += obj[item].avg
    }
  }
  
  if(avgTotal > acc.avg){
    acc.name = myName
    acc.avg = avgTotal
  }
  
  return acc
  
},{name:"",avg:-Infinity})


console.log(res)


//------------------------------------------------
 

function countPrimitive(obj){
  
  let primitive = ["string","number","boolean","undefined","symbol"]
  
  let count = 0;
  
  for(let key in obj){
    
    let curr = obj[key]
    
    // console.log(curr)
    
    if(primitive.includes(typeof curr)){
      count++
    }else{
      
      if(Array.isArray(curr)){
        
        for(let item of curr){
          
          if(primitive.includes(typeof item)){
            count++
          }else{
            count += countPrimitive(item)
          }
          
        }
      }else{
      if(typeof curr === "object" && curr !== null){
        
        count += countPrimitive(curr)
        
      }
        
      }
      
      
      
      
    }
    
  }
  
 return count 
  
}


 
 
 
 

// - Input: arr = [1, 2, 3, 4, 5, 6, 7], k = 3
                  // [7,6,5,4,3,2,1,]
// Output: [5, 6, 7, 1, 2, 3, 4]

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3
function transform(arr,k){
  
  function reverse(arr,start,end){
    
    while(start < end){
      
      let temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp;
      start++
      end--
    }  
  }
  
    reverse(arr,0,arr.length-1)
    reverse(arr,0,k-1)
    reverse(arr,k,arr.length-1)
  console.log(arr)
  
}

console.log(transform(arr,k))




