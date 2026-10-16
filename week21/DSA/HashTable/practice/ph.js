class HashTableChaine{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0 
        let PRIME = 31

        for(let i = 0 ; i < Math.min(key.length,100);i++){
            total = (total*PRIME+key.charCodeAt(i))%this.size


        }
        return total % this.size

    }

    set(key,value){
        let index = this.hash(key)

        if(!this.table[index]){
            this.table[index] = []
        }
        this.table[index].push([key,value])

    }


    display(){
        for(let i = 0 ; i < this.table.length ;i++){
            if(this.table[i])
            console.log(`Index ${i}:`, this.table[i]);
            
        }
    }

    get(key){
        
        let index = this.hash(key);
        
        let bucket = this.table[index]
        
        for(let [k,v] of bucket){
            
            
            if(k === key){
                
                return v
            }
        }

        console.log("not found");
        
    }


}

let tab = new HashTableChaine(10)

tab.set("aj","ajay")
tab.set("ja","ajayps")
tab.set("ab","silpa")
tab.display()
console.log(tab.get("aj"));


