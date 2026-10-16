
// Chaining 

class HashTable{
    constructor(size){
        this.size = size;
        this.buckets = Array(this.size).fill(null).map(()=>[]);
    }
    
    hash(key){
        let total = 0;
        for(let e of key){
            total += e.charCodeAt(0);
        }
        return total%this.size;
    }
    
    set(key,value){
        let index = this.hash(key);
        let bucket = this.buckets[index];
        for(let pair of bucket){
            if(pair[0]==key){
                pair[1]=value;
                return;
            }
        }
        bucket.push([key,value])
    }
    
    get(key){
        let index = this.hash(key);
        let bucket = this.buckets[index];
        for(let pair of bucket){
            if(pair[0] === key)return pair[1]
        }
        return undefined;
    }
    
    has(key){
        return this.get(key) !== undefined;
    }
    
    delete(key){
        let index = this.hash(key);
        let bucket = this.buckets[index];
        
        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0] === key){
                bucket.splice(i,1);
                return true;
            }
        }
        
        return false;
    }


    
}


function DeleteDuplicate(str){
    let result = "";
    let table = new HashTable(20);
    for(let key of str){
        let lower = key.toLowerCase();
        if(!table.has(lower)){
            table.set(lower,true);
            result+=key;
        }
    }
    console.log(result);
}

DeleteDuplicate("AKhila")






// Linear Probing HashTable

class LinearProbingHashTable{
    constructor(size=10){
        this.size = size;
        this.bucket = Array(this.size).fill(null);
        this.deleted =Symbol('DELETED')
    }
    
    _hash(key){
        let hash = 0;
        for(let e of key){
            hash+=e.charCodeAt(0);
        }
        return hash%this.size
    }
    
    set(key,value){
        let index = this._hash(key);
        let start = index;
        while(this.bucket[index]&&this.bucket[index]!=this.deleted){
            if(this.bucket[index][0] == key){
                this.bucket[index][1] = value;
                return;
            }
            
            index = (index+1)%this.size;
            if(index == start)throw new Error("Hash table is full")
        }
        this.bucket[index] = [key,value];
    }
    
    get(key){
        let index = this._hash(key);
        let start = index;
        while(this.bucket[index]){
            if(this.bucket[index][0] === key)return this.bucket[index][1]
            index = (index+1)%this.size;
            if(start === index)break;
        }
        return undefined;
    }
    
    delete(key){
        let index = this._hash(key);
        let start = index;
        while(this.bucket[index]){
            if(this.bucket[index]!=this.deleted && this.bucket[index][0]===key){
                this.bucket[index] = this.deleted;
                return true;
            }
            index = (index+1)%this.size;
            if(index === start)break;
        }
        return false;
    }
    
    has(key){
        return this.get(key) != undefined
    }
    
    display(){
        this.bucket.forEach((item,index)=>{
            if(item!=null)console.log(`${index} : ${item}`)
            // console.log(index, ":", item);
        })
    }
}


let b = new LinearProbingHashTable();

b.set("name","Akhil");
b.set("age",23);
b.set("gender","M");
b.display()
console.log(b.has("nam"))

function Duplicate(str){
    let result = "";
    let b = new LinearProbingHashTable();
    for(let i =0;i<str.length;i++){
        let lower = str[i].toLowerCase();
        if(!b.has(lower)){
            b.set(lower,true);
            result+=str[i]
        }
    }
    console.log(result)
}

Duplicate("Akhilkumars")






// Hash Table with rehash method.



class HashTable{
    constructor(size = 10){
        this.size = size;
        this.bucket = Array(this.size).fill(null);
        this.deleted = Symbol('DELETED');
        this.count = 0;
    }
    
    _hash(key){
         let hash = 0;
         for(let e of key){
             hash+=e.charCodeAt(0);
         }
         return hash%this.size;
    }
    _loadFactor(){
        return this.count/this.size
    }
    
    _isPrime(n){
        if(n<2)return false;
        for(let i=2;i<=n;i++){
            if(n%i == 0)return false
        }
        return true
    }
    
    _nextPrime(n){
        while(!this._isPrime(n)){
            n++
        }
        return n
    }
    
    _reHash(){
        let oldTable = this.bucket;
        let newSize = this._nextPrime(this.size*2);
        this.size=newSize;
        this.count = 0;
        
        for(let item of oldTable){
            if(item && item!==this.deleted){
                this.set(item[0],item[1])
            }
        }
    }
    
    
    set(key,value){
        if(this._loadFactor() > 0.7){
            this._reHash()
        }
        let index = this._hash(key);
        let start = index;
        while(this.bucket[index]&&this.bucket[index]!=this.deleted){
            if(this.bucket[index][0] === key){
                this.bucket[index][1] = value;
                return ;
            }
            
            index = (index+1)%this.size;
            if(index === start)throw new Error("Hash table is full");
        }
        
        this.bucket[index] = [key,value];
        this.count++
    }
    
    
    get(key){
        let index = this._hash(key);
        let start = index;
        while(this.bucket[index]){
            if(this.bucket[index][0] === key)return this.bucket[index][1];
            
            index = (index+1)%this.size;
            if(index === start )break;
        }
        return undefined;
    }
    
    has(key){
        return this.get(key) !== undefined
    }
    
    delete(key){
        let index = this._hash(key);
        let start = index;
        while(this.bucket[index]){
            if(this.bucket[index][0] == key && this.bucket[index]!==this.deleted){
                this.bucket[index] = this.deleted;
                this.count--;
                return true;
            }
            
            index = (index+1)%this.size;
            if(index == start)break;
        }
        return false;
    }
    
    display(){
        this.bucket.forEach((item,index)=>{
            if(item!=null)console.log(index," : ",item)
        })
    }
    
}


let b = new HashTable();
b.set("name","Akhil");
b.set("age",23);
b.set("gender","M");
b.display()
console.log(b.delete("gender"));
b.display()

b.set("gender","m");
b.display()

// console.log(b.get("age"))
