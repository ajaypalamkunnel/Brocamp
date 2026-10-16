const express = require('express')
const EventEmitter = require('events')
const app = express()

const myEmitter = new EventEmitter()

app.get('/',(req,res)=>{
    res.send('hi guyssss')
})


app.get('/user/:id',(req,res)=>{
    const userId = req.params.id

    res.send(`user requested of userId = ${userId}`);
    
})


app.get('/products',(req,res)=>{
  const name = req.query.name
  const category = req.query.category

  res.send(`User serached for ${name} in ${category}`)
})

app.get('/date',(req,res)=>{

  let date = Date()
  
  setTimeout(()=>{
    res.send(`Current date : ${date}`)

  },3000)
  
})


app.get('/events/:name',(req,res)=>{

  const name = req.params.name

  myEmitter.on('greet',(name)=>{
    res.send(`Welcome ${name} to Lake Village                                                   `)
  })

  myEmitter.emit('greet',name)


})



app.listen(3000,()=>{
    console.log('Server listening on port 3000');
})