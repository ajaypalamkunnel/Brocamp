const express = require("express");
const { getController } = require("./middlewares/blockGet");

const app = express();


app.use(getController("localhost"))

app.get("/",(req,res)=>{
    res.send("THis revise app")
})


app.listen(3000,() => {
  console.log("server running on port 3000");
} );
