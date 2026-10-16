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
        let curr = this.root

        for(let i = 0 ; i < word.length;i++){
            let charToInsert = word[i]

            if(!(charToInsert in curr.children)){
                curr.children[charToInsert] = new Node()
            }

            curr = curr.children[charToInsert]

        }
        curr.isWordEnd = true
    }


    contains(word){
        let curr = this.root

        for(let i = 0 ; i< word.length;i++){
            let charToFind = word[i]
            if(!(charToFind in curr.children)){
                return false
            }
            curr = curr.children[charToFind]
        }
        return curr.isWordEnd
    }

    collector(node,prefix,result){

        if(node.isWordEnd){
            result.push(prefix)
        }

        for(let char in node.children){
            this.collector(node.children[char],prefix+char,result)
        }

    }



    autoCompletion(prefix){
        let curr = this.root

        for(let i = 0 ; i < prefix.length;i++){
            let pre = prefix[i];

            if(!(pre in curr.children)){
                return []
            }

            curr = curr.children[pre]
        }

        let result =  []

        this.collector(curr,prefix,result)
        return result
    }
}

let myTrie = new Trie()

myTrie.insert('cat')
myTrie.insert('cattle')
myTrie.insert('catter')

console.log(myTrie.contains('cat'));

console.log(myTrie.autoCompletion('ca'));

