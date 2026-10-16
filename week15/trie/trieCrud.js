class Node{
    constructor(){
        this.children = {}
        this.isWordEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }


    insert(word){
        let current = this.root

        for(let i = 0 ; i < word.length ; i++){
            let charToInsert = word[i];

            if(!(charToInsert in current.children)){

                current.children[charToInsert] = new Node()
            }

            current = current.children[charToInsert]
        }

        current.isWordEnd = true
    }


    search(word){
        let current = this.root;

        for(let i = 0 ; i < word.length ; i++){
            let charToFind = word[i];

            if(!(charToFind in current.children)){
                return false
            }

            current = current.children[charToFind]
        }

        return  current.isWordEnd
    }

    prefixSearch(word){
        let current = this.root;

        for(let i = 0 ; i < word.length ; i++){
            let charToFind = word[i]

            if(!(charToFind in current.children)){
                return false
            }

            current = current.children[charToFind]
        }

        return true
    }

//---------------------------- getWordsWithPrefix ----------------------------------------
collectAllWords(node, prefix, result) {
    if (node.isWordEnd) {
        result.push(prefix);  // Add the word to the result if it's a complete word
    }
    
    for (let char in node.children) {
        this.collectAllWords(node.children[char], prefix + char, result);
    }
}


    getWordsWithPrefix(prefix){
        let result = []
        let current = this.root;
        
        
        for(let i = 0 ; i < prefix.length ; i++){
            let charToFind = prefix[i];
            
            if(!(charToFind in current.children)){
                return []
            }
            
            current = current.children[charToFind]
        }
        
        
        this.collectAllWords(current,prefix,result)
        return result
    }
    //---------------------------- getWordsWithPrefix ----------------------------------------


    countAllWords(node){
        
    }

    countWordsWithPrefix(prefix){
        let current = this.root

        for(let i = 0 ; i < prefix.length ; i++){
            let char = prefix[i]

            if(!(char in current.children)){
                return 0
            }

            current = current.children[char]
        }

        return this.countAllWords(current);

    }
    
    
}

let tr = new Trie()
let data = ["cat", "car", "cattle", "cart"]

function uploader(data){
    console.log(data);
    
    data.forEach((val)=>{
        console.log(val);
        
        tr.insert(val)
    })
}

uploader(data)

console.log(tr.search("Cat"));
console.log(tr.getWordsWithPrefix("car"));
