class HashTableChained{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0;

        let PRIME = 31;

        for(let i = 0 ; i < Math.min(key.length,100);i++){
             total = (total * PRIME + key.charCodeAt(i)) % this.size
        }
        return total
    }


    set(key,value){
        let index = this.hash(key);

        if(!this.table[index]){
            this.table[index] = []
        }
        this.table[index].push([key,value])
    }

    get(key){
        let index = this.hash(key)

        const bucket = this.table[index]

        if(bucket){
            for(let [k,v] of bucket){
                if(k === key){
                    return v
                }
            }
        }
        return undefined
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) { 
                console.log(`Index ${i}:`, this.table[i]);
            }
        }
    }

    remove(key){
        const index = this.hash(key)

        const bucket = this.table[index]

        if(bucket){
            this.table[index] = bucket.filter(([k])=>k !== key)
        }


    }

}

let list = new HashTableChained(50)

list.set("aj","ajay")
list.set("In","India")
list.set("ger","Germany")
list.set("nI","Indonesia")
list.set("nI","Indonesia2")

list.display()
list.remove('aj')
list.display()