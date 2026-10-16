const fs = require("fs")

fs.mkdir("./myFolder",{recursive:true},(err)=>{

    if(err){
        console.log("error in directory creation:",err);
        return
    }

    console.log("dericetory created sccessfully");
    
})

let data = 'this data of '

for(let i = 1 ; i <= 3 ;i++){

    fs.writeFileSync(`./myFolder/file${i}.txt`,`${data} ${i*200}`,(err)=>{

        if(err){
            console.log("File creattion error:",err);
            return
        }

         console.log("file created sccessfully");
    })


}

fs.unlinkSync("./myFolder/file1.txt",(err)=>{
    if(err){
        console.log("Error in file deletion");
        return
    }

    console.log(`file deleted succesfully`);
    
})

fs.readdir("./myFolder",(err,files)=>{
    if(err){
        console.log("error in the dir reading");
        return
    }

    console.log("readed files : ",files);
    
})