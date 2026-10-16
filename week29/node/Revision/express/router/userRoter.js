const { Router } = require("express");
const router = Router()



router.get('/profile/:id/:name',(req,res)=>{
    let {id,name} = req.params

    res.send(`user : ${id} name:${name}`)


})

module.exports = router