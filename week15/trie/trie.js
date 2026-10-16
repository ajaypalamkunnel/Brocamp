class Node{
    constructor(){
        this.childern = {};
        this.isWordEnd = false
    }
}




class Trie{
    constructor() {
        this.root = new Node()
    }


    insert(word){
        let curr = this.root;

        for(let i = 0 ; i < word.length;i++){
            let charToInsert = word[i];
            if(!(charToInsert in curr.childern)){
                curr.childern[charToInsert] = new Node()
            }

            curr = curr.childern[charToInsert]
        }

        curr.isWordEnd = true
    }


    contains(word){
        let curr = this.root

        for(let i = 0 ; i < word.length ; i++){
           let chatToFind = word[i];

           if(!(chatToFind in curr.childern)){
                return false;
           }

           curr = curr.childern[chatToFind];
        }

        return curr.isWordEnd;
    }


    startWithPrefix(prefix){
        let curr = this.root;

        for(let i = 0 ; i < prefix.length ; i++){
            let charToFind = prefix[i]

            if(!(charToFind in curr.childern)){
                return false
            }

            curr = curr.childern[charToFind]
        }

        return true;
    }

    display(node=this.root,prefix=""){
        
        if(node.isWordEnd){
            console.log(`Word: ${prefix} `);
            
        }

        for(let char in node.childern){
            this.display(node.childern[char], prefix + char)
        }
        
        
    }

    collectAllWords(node,prefix,result){
        if(node.isWordEnd){
            result.push(prefix)
           // console.log(prefix);
            
        }
        for(let char in node.childern){
            this.collectAllWords(node.childern[char],prefix + char,result)
        }
    }
    fetchWordsWithPrefix(prefix){
        let current = this.root;
        for(let char of prefix){
            if(!(char in current.childern)){
                return [];
            }
            current = current.childern[char]
        } 
        
        let result = [];
       
        this.collectAllWords(current, prefix,result);

        return result
    }

    collector(node,prefix,result){

        if(node.isWordEnd){
            result.push(prefix)
        }

        for(let char in node.children){
            this.collector(node.childern[char],prefix+char,result)
        }

    }


    autoCompletion(prefix){
        if(!prefix)return
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



let myTrie = new Trie();
myTrie.insert("apple");
myTrie.insert("app");
myTrie.insert("application");
myTrie.insert("apply");
myTrie.insert("bat");
myTrie.insert("ball");
console.log(myTrie.contains("ajayp"));
console.log(myTrie.startWithPrefix("aj"));


console.log(myTrie.fetchWordsWithPrefix("ba"));
console.log(myTrie.autoCompletion("ba"));


//myTrie.display()
  

/*
fetchWordsWithPrefix(prefix) {
    let current = this.root;

    // Traverse the Trie to find the prefix node
    for (let char of prefix) {
        if (!(char in current.childern)) {
            return []; // Prefix not found
        }
        current = current.childern[char];
    }

    // Collect all words starting from this node
    const words = [];
    const stack = [[current, prefix]]; // Use a stack for iterative traversal

    while (stack.length) {
        const [node, currentWord] = stack.pop();

        if (node.isWordEnd) {
            words.push(currentWord);
        }

        for (let char in node.childern) {
            stack.push([node.childern[char], currentWord + char]);
        }
    }

    return words;
}

*/ 



// autocomplete(fragment) {
//     if (!fragment) { return; }
//     let result = [];
//     let n = this.root;
//     for (let i = 0; i < fragment.length; i++) {
//       const c = fragment[i];
//       if (!n.children.hasOwnProperty(c)) {
//         break;
//       }
//       n = n.children[c];
//       if (i === fragment.length - 1) {
//         const queue = [];
//         queue.push([n, fragment]);
//         while (queue.length) {
//           const element = queue.shift();
//           const node = element[0];
//           const word = element[1];
//           if (node.isWord) {
//             result.push(word)
//           }
//           for (const j in node.children) {
//             const child = node.children[j];
//             queue.push([child, word + child.value]);
//           }
//         }
//       }
//     }
//     return result;
//   }