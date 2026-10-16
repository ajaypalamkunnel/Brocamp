

class HashTable{
  
  constructor(size=70){
    
    this.table = new Array(size).fill(null).map((e)=>[])
    this.size = size;
    
    
  }
  
  
  hash(key){
    let total = 0;
    for(let e of key){
      total+= e.charCodeAt(0)
    }
    return total%this.size
  }
  
  
  set(key,value){
    let index = this.hash(key);
    let bucket = this.table[index]
    for(let pair of bucket){
      if(pair[0] === key){
        pair[1] = value
      }
    }
    bucket.push([key,value])
  }
  
  get(key){
    
    let index = this.hash(key)
    let bucket = this.table[index];
    
    for(let pair of bucket){
      if(pair[0]===key){
        return pair[1]
      }
    }
    return undefined
  }
  
  has(key){
    return this.get(key) !== undefined
  }
  
  delete(key){
    
    let index = this.hash(key)
    let bucket = this.table[index]
    
    for(let i = 0 ; i < bucket.length;i++){
      if(bucket[i][0]===key){
        bucket[i].splice(i,0)
        return true
      }
    }
    
    return false
    
  }
  
  
}


let ht = new HashTable()
