const express = require("express")
const axios = require("axios")
const { logger } = require("./middlewares/logger")
const router = express.Router()
const app = express()


const userRoutes =  require('./router/userRoter')
app.use(logger)


app.use('/user',userRoutes)

app.get("/",(req,res)=>{

    res.send("Hello, Ajay!")
})


app.get("/about",(req,res)=>{
    res.send("This is the about page")
})

// app.get("/user/:name",(req,res)=>{

//     const name = req.params.name

//     res.send(`Welcome ${name}`)

// })

let product = {
  "id": 1,
  "name": "Mobile",
  "price": 15000
}

 const fetchData = async()=>{

    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)

    return response.data

}


app.get("/wheather",async(req,res)=>{
    
    const users = await fetchData()
    res.status(200).json(users)
})

app.get("/product",(req,res)=>{
    res.status(200).json(product)
})


app.get("/search",(req,res)=>{
    let query = req.query.item
    let model = req.query.model
    let price = req.query.price

    res.send(`your are searched ${model} ${query} with ${price}`)
})

app.listen(3000,()=>{   
    console.log("server running on port 3000");
})