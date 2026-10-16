import { useState,useEffect } from "react";

const Test = () =>{
    useEffect(()=>{
        console.log("Test Running");

        return ()=>{
            console.log("Unmount");
            
        }
        
        
    },[])

    return <h1>Test Component</h1>
}

export default Test;