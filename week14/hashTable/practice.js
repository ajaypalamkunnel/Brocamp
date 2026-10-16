
// class HashTable{
//     constructor(size){
//          this.keyMap = new Array(size)
//     }

//     hash(key){
//         let total = 0;
//         let PRIME = 31;

//         for(let i = 0 ; i < Math.min(key.length,100);i++){
//             let char = key[i];

//             let value = char.charCodeAt(0)-96;

//             total = (total*PRIME+value)% this.keyMap.length
//         }

//         return total
//     }

//     set(key,value){
//         let index = this.hash(key);
//         if(!this.keyMap[index]){
//             this.keyMap[index] = []
//         }
//         this.keyMap[index].push([key,value])
//     }


//     add(key,value){
//         let index = this.hash(key);
//         if(!this.keyMap[index]){
//             this.keyMap[index] = []
//         }
//         this.keyMap[index].push([key,value])
//     }

//     print(){
//         this.keyMap.forEach((value)=>{
//             console.log(value);
            
//         })
//     }

//     // hashp(key){
//     //     let total = 0;
//     //     let prime = 31;

//     //     for(let i = 0 ; i < Math.min(key.length,100);i++){
//     //         let char = key[i];

//     //         let value = char.charCodeAt(0)-96;
//     //         total = (total*prime+value)%this.keyMap.length
//     //     }
//     //     return total;
//     // }


//     // hasher(key){
//     //     let total=0;
//     //     let prime = 31

//     //     for(let i = 0 ; i < Math.min(key.length,100);i++){
//     //         let char = key[i];

//     //         let value = char.charCodeAt(0)-96;

//     //         total = (total*prime+value)%this.keyMap.length
//     //     }
//     //     return total
//     // }


//     // hashFun(key){
//     //     let total = 0;
//     //     let prime = 31;

//     //     for(let i = 0 ; i < Math.min(key.length,100);i++){
//     //         let char = key[i];

//     //         let value = char.charCodeAt(0)-96;

//     //         total = (total*prime+value)%this.keyMap.length
//     //     }
//     //     return total

//     // }


//     // hasher2(key){
//     //     let total = 0;
//     //     let prime = 31;

//     //     for(let i = 0 ; i < Math.min(key.length,100);i++){
//     //         let char = key[i];

//     //         let value = char.charCodeAt(0)-96;

//     //         total = (total*prime+value)%this.keyMap.length
//     //     }
//     //     return total
//     // }

    
// }

// let ht = new HashTable();
// ht.set("Name","Ajay")
// ht.set("Age","20")
// ht.set("Age","21")
// ht.set("Place","Pala")
// ht.print()
// //console.log(ht.hash());



class myHash{
    constructor(size){
        this.keyMap = new Array(size)
        this.size = size;
    }

    hasher(key){
        let total = 0;
        let prime = 31;

        for(let i = 0 ; i < Math.min(key.length,100);i++){
            let char = key[i];
            let value = char.charCodeAt(0)-96
            total = (total*prime+value)%this.keyMap.length
        }
        return total;
    }

    set(key,value){
        let index = this.hasher(key);
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
}

let myh = new myHash()

myh.set("name","silpa");
myh.set("age",20);

myh.print()










////////////////////////////////////////



class HashTable{
    constructor(size){
        let table = new Array(size)
    }
    
    hash(key){
        let total = 0;
        let PRIME = 31;
        
        for(let i = 0 ; i < key.length;i++){
            let char = key[i]
            let value = char.charCodeAt(0)-96
            
            total = (total*PRIME+value) % this.table.length
        }
        return total
    }
    
    set(key,value){
        let index = hash(key);
        let bucket = this.table[index]
        
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKeyItem = bucket.find(item=>item[0]===key)
            
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }
    
}