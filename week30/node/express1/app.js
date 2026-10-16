const express = require("express")

const app = express()


let users = [
  { id: 1, name: "Ajay" },
  { id: 2, name: "Silpa" }
];


app.get("/home",(req,res)=>{
    res.json(users)
})





app.listen(3000,()=>{
    console.log("server is running on the port 3000")
})