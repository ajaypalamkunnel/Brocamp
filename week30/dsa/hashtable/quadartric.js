
class HashTable{

    constructor(size=60){
        this.table = new Array(size).fill(null)
        this.size = size
    }

    hash(key){
        let total = 0;
        for(let e of key){
           total += e.charCodeAt(0)
        }
        return total%this.size
    }

    set(key,value){

        let index = this.hash(key)
        let i = 1;

        while(this.table[index] !== null && this.table[index][0] !== null){
            index = (index + (i*i))%this.size;
            i++
        }

        this.table[index] = [key,value]
     }


     get(key){
        let index = this.hash(key)
        let i =1;
        while(this.table[index] !== null){
            if(this.table[index][0]===key){
                return this.table[index][1]
            }

            index = (index+(i*i))%this.size
            i++
        }
        return undefined
     }

     has(key){
        return this.get(key) !== undefined
     }

     delete(key){
        let index = this.hash(key)
        let i = 1;

        while(this.table[index] !== null){
            if(this.table[index][0] == key){
                this.table[index] = null
                return true
            }

            index = (index+ (i*i))%this.size;
            i++
        }

        return false
    }


}  