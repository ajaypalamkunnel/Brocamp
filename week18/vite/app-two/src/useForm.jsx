//this is a custom hooks

import { useState } from "react";

export const useForm = (initialValue) =>{
    const [value,setValue] = useState(initialValue)
    //console.log("In form",value);
    return [value,(event)=>{
        setValue({
            ...value,
            [event.target.name]:event.target.value
        })
    }]
}