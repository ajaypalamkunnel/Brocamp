
const loggerMiddleware = (store) =>(next)=>(action)=>{
    console.log('Action dispatched:',action);
    if(action.payload==='undefined'){
        action.payload = 5
    }
    console.log(action.payload);
    
    next(action)
    
}

export default loggerMiddleware