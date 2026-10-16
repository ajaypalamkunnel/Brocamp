const express = require('express');

const app = express()

app.set("view engine","ejs")
app.get('/home',(req,res)=>{
    try {
        res.render('index')
    } catch (error) {
        console.log(error);
        
    }
})

app.listen(8000,()=>{
    console.log(`server is running on the port 8000`); 
})