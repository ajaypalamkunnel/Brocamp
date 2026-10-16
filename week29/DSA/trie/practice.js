// class Node{
//     constructor() {
//         this.children = {}
//         this.isWordEnd = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }


//     insert(word){

//         let node = this.root

//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new Node()
//             }

//             node = node.children[char]
//         }

//         node.isWordEnd = true

//     }


//     search(prefix){
//         if(!prefix){
//             console.log("invalid");
//             return
//         }

//         let node = this.root

//         for(let char of prefix){

//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }

//         return node.isWordEnd
//     }


//     startsWith(prefix){
//         if(!prefix){
//             console.log("invalid");
//             return
//         }

//         let node = this.root

//         for(let char of prefix){

//             if(!node.children[char]){
//                 return false
//             }

//             node = node.children[char]

//         }

//         return true

//     }

//     collector(node,prefix,result){
//         if(node.isWordEnd){
//             result.push(prefix)
//         }

//         for(let char in node.children){
//             this.collector(node.children[char],prefix+char,result)
//         }
//     }




//     autoCompletion(prefix){

//         let result = []
//         let curr = this.root

//         for(let char of prefix){

//             if(!curr.children[char]){
//                 return
//             }

//             curr = curr.children[char] 

//         }

//         this.collector(curr,prefix,result)

//         return result



//     }


//     longestPrefix(word){

//         let node = this.root
//         let prefix = ""
//         let longest = ""

//         for(let char of word){

//             if(!node.children[char]){
//                 break
//             }

//             node = node.children[char]
//             prefix += char

//             if(node.isWordEnd){
//                 longest = prefix
//             }

//         }

//         return longest

//     }




// }



// let mytrie3 = new Trie()
// mytrie3.insert("cat")
// mytrie3.insert("cat")
// mytrie3.insert("cab")
// mytrie3.insert("cadi")
// mytrie3.insert("cattle")
// mytrie3.insert("bat")
// mytrie3.insert("ball")
// mytrie3.insert("bad")
// console.log(mytrie3.autoCompletion("catterp"))



// console.log(mytrie3.search("cab"));

// console.log(mytrie3.longestPrefix("ca"));


// let trie4 = new Trie();
// trie4.insert("go");
// trie4.insert("gone");
// trie4.insert("goal");
// trie4.insert("good");

// console.log(trie4.longestPrefix("gonesafe")); // "gone"
// console.log(trie4.longestPrefix("goat"));     // "go"
// console.log(trie4.longestPrefix("gaurav"));   // ""


class Node{
    constructor(){
        this.children = {}
        this.isWordEnd = false
    }
}

class Trie{
    
    constructor(){
        this.root = new Node()
    }
    
    
    insert(word){
        let node = this.root
        
        for(let char of word){
            
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            
            node = node.children[char]
        }
        
        node.isWordEnd = true
    }
    
    
    search(word){
        
        let node = this.root
        
        for(let char of word){
            
            if(!node.children[char]){
                return false
            }
            
            node = node.children[char]
        }
        
        return node.isWordEnd
        
    }

    _collector(node,prefix,result){

        if(node.isWordEnd){
            result.push(prefix)
        }

        for(let char in node.children){
            this._collector(node.children[char],prefix+char,result)
        }

    }


    autoCompletion(prefix){

        if(!prefix){
            return []
        }
        let result  = []
        let curr = this.root

        for(let char of prefix){

            if(!curr.children[char]){
                return []
            }

            curr = curr.children[char]    
        }

        this._collector(curr,prefix,result)


        return result



    }
    
    
    
}


let myTrie = new Trie()
myTrie.insert("cat")
myTrie.insert("car")
myTrie.insert("cattle")
myTrie.insert("catter")
console.log(myTrie.autoCompletion("cat"))

