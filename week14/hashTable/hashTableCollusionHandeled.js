class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size
    }

    hash(key){
        let total = 0;
        let prime = 31;

        for(let i = 0 ; i < Math.min(key.length,100);i++){
            let char = key[i]
            let value = char.charCodeAt(0)-96
            total = (total*prime+value)%this.table.length
        }

        return total
    }



    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index];

        if(!bucket){
            //if there is no value present in that array 
            //create a array and add [key,value]
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


    get(key){

        if (this.table.length === 0) {
            console.log("Table is empty!!!");
            return;
        }


        let index = this.hash(key)
        let bucket = this.table[index]
        
        if(bucket){
            let sameKeyItem = bucket.find(item=>item[0]===key);

            if(sameKeyItem){
                //returning the value
                return sameKeyItem[1]
            }else{
                console.log("Not found!!");
                return;
            }
        }

        
        
    }

    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index]

        if(bucket){
            const sameKeyItem = bucket.find(item=>item[0]===key)

            if(sameKeyItem){
                bucket.splice(bucket.indeOf(sameKeyItem),1)
            }
        }

    }


    display(){

        if(this.table.length===0){
            console.log("table is Empty!!!!!!!");
            return
        }


        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
                
            }
        }
    }
}

let myht = new HashTable();
myht.set("name","ajay")
myht.set("place","Pala")
myht.set("mane","Ramapuaram")
myht.set("anem","Rapuaram")
console.log(myht.get("place"));
 
myht.display()





// class HashTable2{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = 0
//     }

//     hash(key){
//         let total = 0;
//         let PRIME = 31;

//         for(let i = 0 ; i < Math.min(key.length,100);i++){
//             let char = key[i];
//             let value = char.charCodeAt(0)-96;
//             total = (total*PRIME+value)%this.table.length
//         }
//         return total
//     }

//     set(key,value){
//         let index = this.hash(key);
//         let bucket = this.table[index];

//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             let sameKeyItem  = bucket.find((item)=>item[0]===key);

//             if(sameKeyItem){
//                 sameKeyItem[1] =value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.hash(key);
//         let bucket = this.table[index]
//         let sameKeyItem = bucket.find((item)=>item[0]===key)

//         if(sameKeyItem){
//             return sameKeyItem[1]
//         }

//         console.log("not found!!");
//         return
        
//     }

//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index];
//         let sameKeyItem = bucket.find((item)=>item[0]===key)

//         if(sameKeyItem){
//             bucket.splice(bucket.indeOf(sameKeyItem),1)
//         }
//     }

//     display(){
//         if(this.table.length===0){
//             console.log("table is empty!!");
//             return
//         }else{
//             for(let i = 0; i < this.table.length;i++){
//                 console.log(i,this.table[i]);
                
//             }
//         }
//     }
// }

// let mht = new HashTable2()

// mht.set("name","silpa")
// mht.set("age",20)
// mht.set("place","Ramapuram")


// mht.display()