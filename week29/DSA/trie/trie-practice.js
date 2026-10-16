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

            node = node.childNodes[char]
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


    startWith(prfix){

        let node = this.root

        for(let char of prfix){

            if(!node.children[char]){
                return
            }
        }

        return true
    }

    collector(node,prefix,result){

        if(node.isWordEnd){
            result.push(prefix)
        }

        for(let char in node.children){
            this.collector(node.children[char],prefix+char,result)
        }

    }


    autoComplete(prefix){

        let result = []
        let node = this.root

        for(let char of prefix){

            if(!node.children[char])return []

            node = node.children[char]

        }


        this.collector(node,prefix,result)

        return result

        
    }


}