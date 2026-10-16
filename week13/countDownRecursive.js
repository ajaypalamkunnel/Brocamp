function coutDown(num){
    if(num<=0){
        console.log("Finished....");
        return   
    }
    console.log(num);;
    num--;
    coutDown(num)
}

coutDown(4)