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


//     insert(word){
//         let current = this.root;

//         for(let i = 0 ; i < word.length;i++){
//             let charToInsert = word[i];

//             if(!(charToInsert in current.children)){
//                 current.children[charToInsert] = new Node()
//             }

//             current = current.children[charToInsert]
//         }

//         current.isWordEnd = true
//     }


//     contains(word){
//         let curr = this.root;

//         for(let i = 0 ; i < word.length ; i++){
//             let charToFind = word[i]

//             if(!(charToFind in curr.children)){
//                 return false;
//             }

//             curr = curr.children[charToFind]
//         }

//         return curr.isWordEnd
//     }


//     startWithPrefix(prefix){
//         let curr = this.root;

//         for(let i = 0 ; i < word.length ; i++){
//             let charToFind = word[i]

//             if(!(charToFind in curr.children)){
//                 return false
//             }

//             curr = curr.children[charToFind]
//         }

//         return true
//     }

// }


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



//     insert(word){
//         let curr = this.root

//         for(let i = 0 ; i < word.length ; i++){
//             let charToInsert = word[i]

//             if(!charToInsert in curr.children){
//                 curr.children[charToInsert] = new Node()
//             }

//             curr = curr.children[charToInsert]
//         }
//         curr.isWordEnd = true
//     }


//     contains(word){
//         let curr = this.root

//         for(let i = o ; i < word.length ; i++){
//             let charToFind = word[i]

//             if(!charToFind in curr.childeren){
//                 return false
//             }
//         }

//         return curr.isWordEnd
//     }


//     startWithPrefix(prefix){
//         let curr = this.root;

//         for(let i = 0 ; i < prefix.length ;i++){
//             let charToFind = prefix[i];

//             if(!(charToFind in curr.children)){
//                 return false
//             }

//             curr = curr.children[charToFind]
//         }

//         return true

//     }
// }



// class Node{
//     constructor(){
//         this.children = {}
//         this.isWordEnd = false
//     }
// }

// class Trie{
//     constructor() {
//         this.root = new Node()
//     }

//     insert(word){
//         let curr = this.root;

//         for(let i = 0 ; i<word.length; i++){
//             let charToInsert = word[i];
//             if(!(charToInsert in curr.children)){
//                 curr.children[charToInsert] = new Node()
//             }

//             curr = curr.children[charToInsert]
//         }

//         curr.isWordEnd = true
//     }


//     in(word){
//         let curr = this.root

//         for(let i = 0 ; i < word.length;i++){
//             let charToInsert = word[i];

//             if(!(charToInsert in curr.children)){
//                 curr.children[charToInsert] = new Node()
//             }

//             curr = curr.children[charToInsert]
//         }
//         curr.isWordEnd = true
//     }

//     d
// }



// class Node{
//     constructor(){
//         this.children = {}
//         this.wordEnd = false
//     }
// }


// class Trie{
//     constructor(){
//         this.root = new Node()
//     }


//     insert(word){
//         let curr = this.root

//         for(let i = 0 ; i < word.length; i++){
//             let charToInsert = word[i];

//             if(!(charToInsert  in curr.children)){
//                 curr.children[charToInsert] = new Node()
//             }

//             curr = curr.children[charToInsert]
//         }
//         curr.wordEnd = true
//     }


//      contains(word){
//         let curr = this.root
//         for(let i = 0 ; i < word.length ; i++){
//             let charToFind = word[i]
//             if(!(charToFind in curr.children)){
//                 return false 
//             }

//             curr = curr.children[charToFind]
//         }
//         return curr.wordEnd
//      }


//      startWithPrefix(prefix){
//         let curr = this.root;
//         for(let i = 0 ; i < prefix.length ; i++){
//             let charToFind = prefix[i];

//             if(!(charToFind in curr.children)){
//                 return false
//             }

//             curr = curr.children[charToFind]
//         }

//         return true
//      }



// }



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


//     insert(word){
//         let curr = this.root;

//         for(let i = 0 ; i < word.length; i++){

//             let charToInsert = word[i];

//             if(!(charToInsert in curr.children)){
//                 curr.children[charToInsert] = new Node()
//             }

//             curr = curr.children[charToInsert]
//         }

//         curr.isWordEnd = true
//     }


//     contains(word){
//         let curr = this.root;

//         for(let i = 0 ; i < word.length ; i++){
//             let chatToFind = word[i];
//             if(!(chatToFind in curr.children)){
//                 return false
//             }

//             curr = curr.children[chatToFind]
//         }

//         return curr.isWordEnd
//     }

//     startWithPrefix(prefix){
//         let curr = this.root;

//         for(let i = 0 ; i < prefix.length ; i++){
//             let chatToFind = prefix[i];

//             if(!(chatToFind in curr.children)){
//                 return false
//             }
//         }

//         return true 
//     }

//     collectAllWords(node,prefix,result){

//         if(node.isWordEnd){
//             result.push(prefix)
//         }

//         for(let char in node.children){
//             this.collectAllWords(node.children[char],prefix+char,result)
//         }

//     }

//     fetchWordsWithPrefic(prefix){
//         let current= this.root

//         for(let char of prefix){
//             if(!(char in current.children)){
//                 return []
//             }

//             current = current.children[char]
//         }

//         let result = []

//         this.collectAllWords(current,prefix,result)

//         return result
//     }


//     display(node = this.root, prefix = "") {
//         if (node.isWordEnd) {
//             console.log(`Word: ${prefix}`);
//         }

//         for (let char in node.children) {
//             this.display(node.children[char], prefix + char);
//         }
//     }


// }


// let myTrie = new Trie();

// myTrie.insert("cat");
// myTrie.insert("car");
// myTrie.insert("cart");
// myTrie.insert("dog");
// myTrie.insert("doll");

// console.log("Displaying Trie Contents:");
// myTrie.display();






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

//     insert(word){
//         let current = this.root

//         for(let i = 0 ; i < word.length ; i++){
//             let charToInsert = word[i]

//             if(!(charToInsert in current.children)){
//                 current.children[charToInsert] = new Node()
//             }
//             current = current.children[charToInsert]
//         }

//         current.isWordEnd = true

//     }

//     contains(word){
//         let current = this.root

//         for(let i = 0 ; i < word.length ; i++){
//             let charToFind = word[i];

//             if(!(charToFind in current.children)){
//                 return false
//             }

//             current = current.children[charToFind]
//         }

//         return current.isWordEnd
//     }


//     startWithPrefix(word){
//         let current = this.root;

//         for(let i = 0 ; i < word.length ; i++){
//             let charToFind = word[i]

//             if(!(charToFind in current.children)){
//                 return false
//             }
//             current = current.children[charToFind]
//         }

//         return true
//     }

//     collectWords(node,prefix,result){

//         if(node.isWordEnd){
//             result.push(prefix)
//         }


//         for(let char in node.children){
//             this.collectWords(node.children[char],prefix+char,result)
//         }
//     }


//     autoCompletion(prefix){
//         if(!prefix)return

//         let current = this.root

//         for(let i = 0 ; i < prefix.length ; i++){
//             let charToFind = prefix[i]
//             if(!(charToFind in current.children)){
//                 return []
//             }

//             current = current.children[charToFind]
//         }

//         let result = []

//         this.collectWords(current,prefix,result)

//         return result
//     }
// }






class Node{
    constructor(){
        this.children = {}
        this.isWordEnd = false
    }
}

class Trie{
    constructor() {
        this.root = new Node()
    }

    insert(word){
        let curr = this.root

        for(let i = 0 ; i < word.length ; i++){
            let charToInsert = word[i];

            if(!(charToInsert in curr.children)){
                curr.children[charToInsert] = new Node()
            }
            curr = curr.children[charToInsert]

        }

        curr.isWordEnd = true
    }


    contains(word){
        let curr = this.root;
        for(let i = 0 ; i < word.length ; i++){
            let charToFind = word[i]

            if(!(charToFind in curr.children)){
                return false
            }

            curr = curr.children[charToFind]
        }

        return curr.isWordEnd
    }

    startWithPrefix(word){
        let curr = this.root;

        for(let i = 0 ; i < word.length ; i++){

            let charToFind = word[i]
            if(!(charToFind in curr.children)){
                return false
            }

            curr = curr.children[charToFind]
        }

        return true
    }

    collectWords(node,prefix,result){

        if(node.isWordEnd){
            result.push(prefix)
        }

        for(let char in node.children){
            this.collectWords(node.children[char],prefix+char,result)
        }

    }


    autoCompletion(prefix){

        if(!prefix){
            return
        }

        let current = this.root

        for(let i = 0 ; i < prefix.length ; i++){
            let charToFind = prefix[i]
            if(!(charToFind in current.children)){
                return []
            }
            current = current.children[charToFind]
        }
        let result = []
        this.collectWords(current,prefix,result)

        return result
    }
}






let trie = new Trie()

trie.insert("pala")
trie.insert("cat")
trie.insert("cart")
trie.insert("cattle")
trie.insert("bat")
trie.insert("bax")

console.log(trie.contains("cat"));

console.log(trie.startWithPrefix("p"));

console.log(trie.autoCompletion("ca"));

 






                        