

function blockPost(req,res,next){

    if(req.method === 'POST'){
        res.status(400).json({message:"post metode node allowe"})
    }else{
        next()
    }
    

}

module.exports = blockPost