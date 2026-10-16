const express = require('express')
const app = express()


app.get('/calculate/:num1/:num2',(req,res)=>{

    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2)

    let mul = num1*num2;
    

    res.send(`result = ${mul}`)

})

app.get('/calc',(req,res)=>{

    let num1 = parseFloat(req.query.num1)
    let num2 = parseFloat(req.query.num2)


    let result = num1 +  num2;
j
    res.send(`addition = ${result}`)

})

app.listen(3500,(req,res)=>{
    console.log("server is running");
    
})