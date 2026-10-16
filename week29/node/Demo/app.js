
const express = require("express")
const rateLimiter = require("express-rate-limit")

const app = express()

const limiter = rateLimiter({
    windowMs:1*60*1000,
    max:5,
    message:"too many request"

})


app.use(limiter)

app.get("/",(req,res)=>{
    
    res.send("helloo")
})


app.listen(3000,()=>{
    console.log("server runnig 3000");
    
})