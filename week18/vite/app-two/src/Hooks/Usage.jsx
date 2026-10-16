import React, { useEffect, useState } from "react";

function Usage(){

  const [value,setValue] = useState(0)
const [color,setColor] = useState("cyan")
const[boom,setBoom] = useState(false)


   //useEffect automatically call cheyyum when 
   //first render chheyyumbolum pinnnindu update cheyyumbolum automatically
   //work cheyyum===> eppolokke render work cheyyunno 
   //appol okke useEffect um work cheyyum
   useEffect(()=>{
    console.log("inside useEffect");

    return ()=>{
        console.log('clean up');
        
    }
    
   },[color]) // useEffect nn 2 arguements aanu ullath,1) callback function
        // 2)depedency it is a array 
        // ee array ill koduuthirikkunna value update ayal mathrame
        // useEffect work cheyyullu
        // dependency array ill oru value um koduthillangill 
        //oru change num aa useffect work cheyilla.
        //but mount cheyyumbolum unmount cheyyumbolum vilikku



    useEffect(()=>{

        setBoom(false)
        const id = setTimeout(()=>{
            setBoom(true)

        },value*1000)

        return ()=>{
            clearTimeout(id)
        }

    },[value])


    return(
        <div>
            <button onClick={()=>{
                setValue(value+1)
            }}>increment</button>
            <label style={{background:color}} >{value}</label>
            <button onClick={()=>{
                setValue(value-1)
            }} >Decrement</button>
                <br />
            <button onClick={()=>{
                setColor("green")
            }}>Green</button>

            <button onClick={()=>{
                setColor("red")
            }}>Red</button>

            <p>if use set any second in the counter it will call after that second</p>
            {
                boom&&value?(
            <div style={{placeItems:"center",width:100,height:100, background:'yellow'}}>

                <h4 style={{margin:50,color:"black"}}>booom!!!</h4>

            </div>
                ):null
            }


        </div>
    )
}

export default Usage