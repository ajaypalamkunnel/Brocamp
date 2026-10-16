import { SUBMIT_FROM } from "./FormTypes"

const submitForm = (formData)=>({
   
        type:SUBMIT_FROM,
        payload:formData
}
)
export default submitForm