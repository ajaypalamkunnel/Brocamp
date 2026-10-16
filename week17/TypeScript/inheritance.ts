type userDetal={
    name:string;
    age: number;
}

type adminDetail = userDetal&{
    role:string
}


interface user{
    name:string
    age:number
}

interface admin extends user{
    role:String 
}




// enum StatusType{
//     PENDING=1,
//     COMPLETED,
//     FAILED

// }

// function getStatus(orderId:string,status:StatusType){
//     console.log(orderId, "==",status);
    
// }

// getStatus("1213",StatusType.PENDING)



