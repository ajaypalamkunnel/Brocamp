function parDes({key1,key2}:{key1:string,key2:number}){
    console.log("The value of key1 is " + key1);
    console.log("The value of key2 is " + key2);  
}
parDes({key1:"hiii",key2:3})




function getParams({
    param1,
    param2 = "default",
 }: {
    param1: boolean;
    param2?: string;
 }) {
    console.log("The value of param1 is " + param1);
    console.log("The value of param2 is " + param2);
 }
 
 getParams({ param1: true, param2: "value" });
 getParams({ param1: false });