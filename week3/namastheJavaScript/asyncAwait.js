console.log("start");

getData()

console.log("end");


async function getData(){

  let data = await fetch("https://www.google.com/")
  console.log(data);
  

}

let dam = ()=>{

}