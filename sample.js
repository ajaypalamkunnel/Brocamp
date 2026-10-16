document.getElementById("btn").addEventListener("click", () => {
  
  const textNode = document.createTextNode("Are you clicked me");
  const action = document.createElement("h1");
  action.appendChild(textNode);

  document.body.appendChild(action);
});



const edtBtn = document.getElementById("edt")
const tit = document.getElementById("tit")
let subBtn
const editText = document.getElementById("inpId")
let inp 
edtBtn.addEventListener("click",()=>{
   
    inp = document.createElement("input")
    inp.id  = "inpid"
    subBtn = document.createElement("button")
    subBtn.innerHTML = "submit"

    document.body.appendChild(inp)
    document.body.appendChild(subBtn)

})



subBtn.addEventListener("click",()=>{

    alert("heloo")
    tit.innerText = editText.innerText
    
    document.body.removeChild(inp)
    document.body.removeChild(subBtn)
})