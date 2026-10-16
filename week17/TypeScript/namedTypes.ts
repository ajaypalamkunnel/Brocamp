//inline type
type status = "Pending"|"completed"|"failed";

let currentStatus:status = "Pending"

console.log(currentStatus);

type ToggleSwitch = "on" | "off";

let control:ToggleSwitch = "on"



function funcName(): never{
    // it throws an exception or never returns

   throw new Error("Error message from function with never as return type.");
 }

 //console.log(funcName());
 
