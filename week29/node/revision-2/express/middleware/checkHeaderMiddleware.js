

// const checkCustomHeader = (req,res,next,headerName)=>{

//     const headerValue = req.headers[headerName.toLowerCase()]

//     if(!headerValue){
//         return res.status(400).json({
//             error: `Missing required header: ${headerName}`
//         })
//     }
    
//     next()

// }

// module.exports = checkCustomHeader