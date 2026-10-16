
import React from "react";
function JustInfo(){
    console.log("justInfo test");
    return(
        
        <div>
            <h3>my rendering is controlled by React.memo </h3>
            
        </div>
    )
}
//ee JustInfo component eppozhum render cheyyilla first tym ill onnu render 
//cheythittuu pinned evade render chethalum cheyiilla only props change cheythal mathrame change aavullu
export default React.memo(JustInfo) 