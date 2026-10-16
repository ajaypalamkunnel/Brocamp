import { SUBMIT_FORM } from "./FormTypes"

const submitForm = (formData)=>({
    type:SUBMIT_FORM,
    payload:formData
})
export default submitForm