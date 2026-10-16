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
        let current = this.root;

        for(let i = 0 ; i <word.length;i++){
            let charToInsert = word[i];

           if(!(charToInsert in current.children)){
                current.children[charToInsert] = new Node()
           }

           current = this.children[charToInsert]
        }

        this.isWordEnd = true
    }


    display(node=this.root,prefix=""){
        
        if(node.isWordEnd){
            console.log(`Word: ${prefix} `);
            
        }

        for(let char in node.childern){
            this.display(node.childern[char], prefix + char)
        }
        
        
    }

}



let trie = new Trie()

trie.insert("ajay")

trie.display()