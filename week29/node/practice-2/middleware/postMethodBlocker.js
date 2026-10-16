

function postMethodBlocker(req,res,next){

    if(req.method === 'POST'){
        return res.status(403).json({message:"Post request is not allowed"})
    }else{
        next()
    }

}


function blocRequest(req,res,next){
    let method = req.method
    if( method == "GET" || method === "POST"){
        return res.status(403).json({messge:"mothod not allwd"})
    }else{
        next()
    }


}

function blockRequestFromSpecificIP(ip){

    return function (req,res,next){

        if(req.ip == ip){
            res.status(403).json({message:"ip not allowed"})
        }

        next()

    }
}


function blockPostBasedQueryOrToken(query,token){

    return function(req,res,next){



    }
}