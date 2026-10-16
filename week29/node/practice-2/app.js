

const express = require('express');
const { blockPostFromDomain } = require('./middleware/postBlocker');


const app = express()



app.use(blockPostFromDomain("http://localhost:3000/"))


app.get("/",(req,res)=>{
    res.send('welcome to my app')
})


app.get("/add/:num1",(req,res)=>{
    const {num1} = req.params;
    const {num2} = req.query;
    res.send(`sum = ${Number(num1)+Number(num2)}`)
})


app.get("/routes",(req,res)=>{

})
.post("/",(req,res)=>{
    
})




app.listen(3000,()=>{
    console.log("server running on port 3000");  
})