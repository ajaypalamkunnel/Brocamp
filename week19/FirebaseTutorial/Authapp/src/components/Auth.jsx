import React from 'react'
import './auth.css'
import { createUserWithEmailAndPassword,sendEmailVerification,signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
const Auth = () => {

    const [email, setEmail] = React.useState('')
    const [password,setPassword] = React.useState("")

    const signIn = async()=>{
        try {
            await createUserWithEmailAndPassword(auth,email,password)
            
        } catch (error) {
            alert(error)
            console.log(error);
            
        }
        console.log(auth?.currentUser);
        
    }
    const verifyEmail = async()=>{
        await sendEmailVerification(auth.currentUser)
    }

    const logout = async()=>{
       await auth.signOut()
    }

  return (
    <div className='auth_login'>

        <input type="text" value={email} placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" value={password} placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={signIn}>Login</button>
        <button onClick={logout}>LogOut</button>
        <button onClick={verifyEmail}>Verify email</button>


    </div>
  )
}

export default Auth