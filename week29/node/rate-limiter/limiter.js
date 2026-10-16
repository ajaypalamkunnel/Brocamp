const express = require('express')
const rateLimiter = require('express-rate-limit')

const app = express()


const limiter = rateLimiter({
    windowMs:1*60*1000,
    max:10,
    message: 'Too many requests from this IP, please try again later.'
})

app.use(limiter)

app.get("/",(req,res)=>{
res.send("helloooo")
})

app.listen(3000,()=>{
    console.log("server running on port 3000");
    
})