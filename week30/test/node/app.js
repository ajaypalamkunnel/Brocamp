// const fs = require("fs");
// const { markAsUncloneable } = require("worker_threads");

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// function findDiagonal(){
//     let res = []
//     for(let i = 0 ; i < matrix.length;i++){
//         for(j = i ; j < matrix.length;j++){
//             if(i==j){
//                 res.push(matrix[i][j])
//             }
//         }
//     }

//     return res

// }


// let data = findDiagonal()
// console.log(data)
// let str = data.map((num)=>num.toString())

// let org = ""

// str.forEach((data)=>{
//     org+=data
// })
// console.log(org)

// fs.writeFileSync("out.txt",org,(err)=>{

//     if(err){
//         console.log("err: ",err);
        
//     }

//     console.log("data writed!!")

// })
