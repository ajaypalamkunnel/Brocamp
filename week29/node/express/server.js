const express = require('express')

const app = express()


app.use("user/add-product",(req,res,next)=>{

    if(req.method === 'POST'){

        return res.json({message:"post method is not allow"})
    }else{
        next()
    }

})



app.get('/',(req,res)=>{
    res.send("Hellooooooo")
})





const PORT = 8000

app.listen(PORT,()=>{
     console.log(`🚀 Server started on http://localhost:${PORT}`);
})