

 function getController(ip){

    return (req,res,next)=>{

        if(req.ip === ip && req.method === "GET"){

            
            return res.status(403).json({message:"get request no available from you"})
        }else{
            console.log("hi",req.ip);
            console.log("hello");
            next()
        }

    }

}

module.exports = {getController}