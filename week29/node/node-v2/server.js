const express = require('express')
const { logger } = require('./middleware/logger')
const { fetchData } = require('./controller/controller')
const router= express.Router()

const app = express()



router.route('/products')
    .get((req,res)=>{
        res.send('Get all products')
    })
    .post((req,res)=>{
        res.send("create a new product")
    })



app.use(logger)

app.get('/user', async (req,res)=>{

    const data = await fetchData()

    res.send(data)

})





const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);  
})