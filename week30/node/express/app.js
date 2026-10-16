
const express = require('express')
const cors = require('cors')
const generateFile = require('./middlewares/addFile')
const blockPost = require('./middlewares/blockPost')
const blockDomain = require('./middlewares/blockDomain')
const {getData} = require('./controller/controller')
const app = express()

// const corsOptions= {
//     origin:"localhost:3000",
//     allowedMethods:["POST"],
//     allowedHeaders:"Content-Type"
// }

// app.use(cors(corsOptions))

// app.use(blockDomain("filpkart.com"))

app.get("/sum/:num1/:num2",(req,res)=>{
    const {num1,num2} = req.params
    generateFile(num1,num2)
})

app.get("/product", async(req,res) =>{
    let {category} = req.query

    if(!category){
        res.send(400).json({message:"category is required"})
    }
    let cl = category.toLowerCase()
    let response = await getData(cl)
    console.log(response);
    
    if(response.length===0){
        res.send(404).json({message:"no prodct found"})

    }

    res.status(200).json(response)
})

app.listen(3000,()=>{
    console.log("server running on port 3000");
})