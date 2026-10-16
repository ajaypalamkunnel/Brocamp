import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config()

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected succesfully");  
    } catch (error) {
        console.log(`Error while connecting mongoDb ${error}`);       
    }
}


export default connectDB;