

function blockPostFromDomain(blockedDomain){

    return function(req,res,next){

        console.log(blockedDomain);
        
        const origin = req.get('Origin') || req.get('Referer')||''       

        if(req.method === 'GET' && origin.includes(blockedDomain)){
            return res.status(403).json({
                message: `post requests from ${blockedDomain} are not allowed`
            })
        }

        next()


    }


}

module.exports = {blockPostFromDomain}