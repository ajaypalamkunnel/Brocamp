import { createContext,useState } from "react"



export const AuthContext = createContext()


const AuthContextProvider = ({children}) => {

     const [user, setUser] = useState({
    name: "ajay",
    isAuthenticated: false,
  });

    const handleLogin = (name)=>{
        console.log(user.name==name);
        

        if(user.name === name){
           setUser((prev)=>({...prev,isAuthenticated:true}))
        }

        console.log(user.isAuthenticated);
        

    }
    const handleLogout = ()=>{
        setUser((prev)=>({...prev,isAuthenticated:false}))
    }



  return (
    <AuthContext.Provider value={{user,handleLogin,handleLogout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider