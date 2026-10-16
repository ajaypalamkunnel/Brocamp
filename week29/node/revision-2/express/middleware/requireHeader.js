
module.exports =  function requireHeader(headerName){

    return function(req,res,next){

        console.log(req.headers)
        const headerValue = req.headers[headerName.toLowerCase()];

        if(!headerValue){
            return res.status(400).json({
                error:`Missing required header: ${headerName}`
            })
        }

        next()

    }

}


