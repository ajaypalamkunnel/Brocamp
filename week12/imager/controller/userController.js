

export const signUpPage = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(`error while rendering signup page ${error} `);
        
    }

    res.render('user/signup',{title:"signup"})
}