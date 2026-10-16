//sample hash function
//for strings only 
function hash(key,len){
    let total = 0;

    for(let char of key){
        let value = char.charCodeAt(0) - 96;
        total = (total + value)%len
    }
    return total
}

// console.log(hash("ajay",12));
// console.log(hash("ajay",12));


// Problems with our current hash
// 1. Only hashes strings (we won't
// worry about this)
// 2. Not constant time - linear in key
// length
// 3. Could be a little more random
  


//Improved hash function

class HashTable{
    constructor(size){
        this.keyMap = new Array(size)
    } 


    hash1(key){
        let total = 0;
        let WEIRD_PRIME = 31;
    
        for(let i = 0 ; i < Math.min(key.length,100);i++){
            let char = key[i];
    
            let value = char.charCodeAt(0)-96;
            total = (total*WEIRD_PRIME+value) % this.keyMap.length;
        }
    
      
      
      return total 
    }

    set(key,value){
        let index = this.hash1(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key,value])
    }

    print(){
        this.keyMap.forEach((value)=>{
            console.log(value);
            
        })
    }


    get(key){
        let index = this.hash1(key)

        if(this.keyMap[index]){
            for(let i = 0 ; i < this.keyMap[index].length;i++){
                if(this.keyMap[index][i][0]===key){
                    console.log(this.keyMap[index][i][1])
                    return 
                    
                }
            }
        
        }
        console.log("Not Found");
        return
    }
}




let ht = new HashTable();
ht.set("name","Ajay")
ht.set("place","Pala")
ht.set("place","Kpadfsd")
ht.get("name")
ht.print()
//console.log(hash1("ajay",12));
