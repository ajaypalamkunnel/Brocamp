const express = require('express')
const rateLimit = require('express-rate-limit')
const checkCustomHeader = require('./middleware/requireHeader')
const app = express()
const myEmitter = require('./events/event')

const limitter =  rateLimit({
    windowMs:1*60*1000,
    max:5,
    message:"too many request"
})

// app.use(checkCustomHeader("x-api-key"))

app.use(limitter)

app.get('/',(req,res)=>{
    res.send("Hellloooo")
    myEmitter.emit('greet',"Ajay")
})


app.get('/users/:userId/posts/:postId/comments/:commentId',(req,res)=>{

    const {userId,postId,commentId} = req.params;

    res.status(200).json({
        userId,
        postId,
        commentId
    })

})



app.get('/products',(req,res)=>{
    const {minprice,maxprice,category} = req.query

    res.status(200).json({
        minprice,
        maxprice,
        category
    })
})


app.listen(3000,()=>{
    console.log("Application running on port 3000");
    
})