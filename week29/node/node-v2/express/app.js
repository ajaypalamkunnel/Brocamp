
const express = require('express')
const rateLimit = require('express-rate-limit')
const router = express.Router()
const app = express()

const limiter = rateLimit({
    windowMs:15*60*1000,
    max:100,
    message:"Too many requests"
})



app.use(limiter)





app.listen(5000,()=>{
    console.log("Server is running on port 5000");
    
})