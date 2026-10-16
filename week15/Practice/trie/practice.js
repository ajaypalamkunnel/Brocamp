class Node{
    constructor(){
        this.children = {}
        this.isWordEnd = false
    }
}

class Triee{
    constructor(){
        this.root = new Node()
    }


    insert(word){
        if(!word){
            console.log("No word found");
            return 
        }else{
            let current = this.root;

            for(let i = 0 ; i < word.length; i++){
                let charToInsert = word[i]

                if(!(charToInsert in current.children)){
                    current.children[charToInsert] = new Node()
                }

                current = current.children[charToInsert]
            }

            current.isWordEnd = true
        }
    }


    contains(word){
        if(!word){
            console.log("No word found");
            return 
        }else{

            let current = this.root;

            for(let i = 0 ; i < word.length ; i++){
                let charToFind = word[i]

                if(!(charToFind in current.children)){
                    return false
                }

                current = current.children[charToFind]
            }

            return current.isWordEnd
        }
    }


    preFixFirst(prefix){
        
        if(!prefix){
            console.log("No word found");
            return 
        }else{
            let current = this.root;

            for(let i = 0 ; i < prefix.length ; i++){
                let charToFind = prefix[i]

                if(!(charToFind in current.children)){
                    return false
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
            console.log("No prefix found");
            return 
        }else{
            let current = this.root;

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


let trie = new Triee()

trie.insert("cat")
trie.insert("car")
trie.insert("cart")
trie.insert("bat")
trie.insert("battle")
trie.insert("batter")

console.log(trie.contains("cat"));
console.log(trie.preFixFirst("ca"));
console.log(trie.autoCompletion("batt"));


 