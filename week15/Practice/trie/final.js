// class Node{
//     constructor(){
//         this.children = {}
//         this.isWordEnd = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }


//     insertWord(word){
//         if(!word){
//             console.log("No Word!!");
//             return
//         }else{
//             let current = this.root

//             for(let i = 0 ; i < word.length;i++){
//                 let charToInsert = word[i]

//                 if(!(charToInsert in current.children)){
//                     current.children[charToInsert] = new Node()
//                 }

//                 current = current.children[charToInsert]
//             }

//             current.isWordEnd = true
//         }
//     }

//     contains(word){
//         if(!word){
//             console.log("No Word!!");
//             return
//         }else{
//             let current = this.root

//             for(let i = 0 ; i < word.length;i++){
//                 let charToFind = word[i]

//                 if(!(charToFind in current.children)){
//                     return false
//                 }

//                 current = current.children[charToFind]
//             }

//             return current.isWordEnd
//         }
//     }

//      prefixFirst(word){
//         if(!word){
//             console.log("No Word!!");
//             return
//         }else{
//             let current = this.root

//             for(let i = 0 ; i < word.length ;i++){
//                 let charToFind = word[i]
//                 if(!(charToFind in current.children)){
//                     return false
//                 }
//                 current = current.children[charToFind]
//             }
//             return true
//         }
//     }

//     collectWord(node,prefix,result){

//         if(node.isWordEnd){
//             result.push(prefix)
//         }

//         for(let char in node.children){
//             console.log("-->",node.children);
            
//             this.collectWord(node.children[char],prefix+char,result)
//         }

//     }

//     autoCompletion(prefix){
//         let current = this.root

//         for(let i = 0 ; i < prefix.length ;i++){
//             let charToFind = prefix[i]
//             if(!(charToFind in current.children)){
//                 return []
//             }
//             current = current.children[charToFind]
//         }

//         let result = []


//         this.collectWord(current,prefix,result)
//         return result 

//     }
// }



// let trie = new Trie()

// trie.insertWord("cat")
// trie.insertWord("cart")
// trie.insertWord("cater")
// trie.insertWord("bat")
// trie.insertWord("batman")

// console.log(trie.prefixFirst("cadfd"));
// console.log(trie.contains("cat"));
// console.log(trie.autoCompletion("b"));





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
        let current = this.root

        for(let i = 0 ; i < word.length;i++){
            let charToInsert = word[i]

            if(!(charToInsert in current.children)){
                current.children[charToInsert] = new Node()
            }

            current = current.children[charToInsert]
        }

        current.isWordEnd = true
    }

    contain(word){
        if(!word){
            return
        }else{
            let current = this.root

            for(let i = 0 ; i < word.length ;i++){
                let charToFind = word[i]

                if(!(charToFind in current.children)){
                    return false
                }

                current = current.children[charToFind]
            }
            return current.isWordEnd
        }
    }


    startWithPrefix(prefix){
        if(!prefix){
            return
        }else{

            let current = this.root

            for(let i = 0 ; i < prefix.length ; i++){
                let charToFind = prefix[i]

                if(!(charToFind in current.children)){
                    return false;
                }

                current = current.children[charToFind]
            }

            return true
        }

    }

    collectWord(node,prefix,result){
        if(node.isWordEnd){
            result.push(prefix)
        }

        for(let char in node.children){
            this.collectWord(node.children[char],prefix+char,result)
        }
    }


    autoCompletion(prefix){
        if(!prefix){
            return
        }else{
            let current = this.root

            for(let i = 0 ; i < prefix.length ; i++){
                let charToFind = prefix[i]

                if(!(charToFind in current.children)){
                    return []
                }

                current = current.children[charToFind]
            }

            let result = []
            this.collectWord(current,prefix,result)

            return result
        }
    }


    
}





let trie = new Trie()

trie.insert("apple");
trie.insert("app");
trie.insert("apply");

trie.insert("dog");
trie.insert("doll");
trie.insert("dorm");
trie.insert("door");

trie.insert("hello");
trie.insert("hell");
trie.insert("help");
trie.insert("helmet");
trie.insert("helium");

console.log(trie.contain("app"));          // Expected output: true
console.log(trie.contain("application"));



console.log("-------------");

console.log(trie.startWithPrefix("do"));
console.log(trie.startWithPrefix("cat"));


console.log(trie.autoCompletion("he"));


// console.log(trie.startWithPrefix("cadfd"));
// console.log(trie.contain("cat"));
// console.log(trie.autoCompletion("ba"));




