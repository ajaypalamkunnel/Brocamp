class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }



    hash(key){
        console.log("hiii");
        
        let total = 0;
        let PRIME = 31

        for(let i = 0 ; i < Math.min(key.length,100);i++){
            total = (total * PRIME + key.charCodeAt(i))%this.size
        }

        return total
    }


    set(key,value){
        let index = this.hash(key)

        // let bucket = 

        if(!this.table[index]){
            this.table[index] = []
        }
        this.table[index].push([key,value])
    }


    get(key){
        let index = this.hash(key)
        console.log(index);
        
        let bucket = this.table[index]

        if(bucket){
            for(let [k,v] of bucket){
                if(k === key){
                    return v
                }
            }
        }

        return undefined
    }

    display(){
        for(let i = 0 ; i < this.table.length ;i++){

            if(this.table[i]){
                console.log(i, this.table[i]);

            }
            
        }
    }
}


let table = new HashTable(50)

table.set("us","America")
table.set("Aus","Australia")
console.log(table.get('us'));

table.display()