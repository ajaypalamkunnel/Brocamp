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
        for(let i = 0 ; i < word.length ; i++){
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

        for(let i = 0 ; i < word.length ; i++){
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
        if(!prefix)return []
        let current = this.root

        for(let i = 0 ; i < prefix.length ; i++){
            let word = prefix[i]

            if(!(word in current.children)){
                return []
            }
            current = current.children[word]
        }

        let result = []

        this.collector(current,prefix,result)
        return result
    }



}


let myTrie = new Trie()

myTrie.insert("BAT")
myTrie.insert("BALL")
myTrie.insert("BALU")
myTrie.insert("BALN")
console.log(myTrie.contains('BALL'));
console.log(myTrie.contains('BAL'));
console.log(myTrie.autoCompletion('F'));

