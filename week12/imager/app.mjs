dotenv.config();
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
import connectDB from './configuration/db.mjs';
import layouts from 'express-ejs-layouts';
import nocache from 'nocache'
import userRoute from './routes/userRoute.mjs';
import jwt from 'jsonwebtoken'

const app = express()

connectDB()

app.set("view engine","ejs");
app.use(layouts)
app.set("layout", "./layouts/layout")

app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.use(express.static(path.resolve("public")))
const PORT = process.env.PORT || 4000




app.use(nocache())
app.use("/",userRoute)

app.use('/test',(req,res)=>{
    res.send("hiiiiii")
})



app.listen(PORT,(err)=>{
    if(err){
        console.log("Error while listing port: ",err);
        
    }else{
        console.log(`server listening to http://localhost:${PORT}`);
        
        
    }
})