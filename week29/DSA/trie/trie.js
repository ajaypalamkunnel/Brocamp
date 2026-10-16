class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    if (!word) {
      console.log("please search");
      return;
    }

    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) return false;

      node = node.children[char];
    }

    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;

    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }

    return true;
  }

  collector(node, prefix, result) {
    if (node.isEndOfWord) {
      result.push(prefix);
    }

    for (let char in node.children) {
      this.collector(node.children[char], prefix + char, result);
    }
  }

  autoCompletion(prefix) {
    if (!prefix) return;
    let result = [];
    let curr = this.root;
    for (let char of prefix) {
      if (!curr.children[char]) return [];
      curr = curr.children[char];
    }
    this.collector(curr, prefix, result);
    return result;
  }

  countWords() {
    return this._countWordsHelper(this.root);
  }

  _countWordsHelper(node) {
    let count = 0;

    if (node.isEndOfWord) {
      count += 1;
    }

    for (let char in node.children) {
      count += this._countWordsHelper(node.children[char]);
    }

    return count;
  }



  longestCommonPrefix(){


    let prefix = "";
    let node = this.root

    while(Object.keys(node.children).length==1 && !node.isEndOfWord){

      let char = Object.keys(node.children)[0]
      prefix += char
      node = node.children[char]
    }

    return prefix

  }



  countWords(){
    let count = 0;
    let stack = [this.root]
    while(stack.length > 0){
      let node = stack.pop()
      console.log(node)
      if(node.iswordEnd){
        count+=1
      }
      for(let child in node.children){  
        stack.push(node.children[child]) 
      }
    }
    return count  
  }

}

let mytrie2 = new Trie();
mytrie2.insert("cat");
mytrie2.insert("cat");
mytrie2.insert("cab");

console.log(mytrie2.search("cab"));
console.log(mytrie2.autoCompletion("ca"));

console.log(mytrie2.countWords());
