class Heap{
    constructor(){
        this.values = []
    }

    insert(value){
        if(!value){
            console.log("enter value");
            return
        }else{
            this.values.push(value)
            this.heapify()
        }

    }

    heapify(){
        let newElementIndex = this.values.length-1
        let newElement = this.values[newElementIndex]

        while(newElementIndex > 0){
            let parentElementIndex = Math.floor((newElementIndex-1)/2)
            let parentElement = this.values[parentElementIndex]

            if(newElement <= parentElement)break

            this.values[parentElementIndex] = newElement
            this.values[newElementIndex] = parentElement
            newElementIndex = parentElementIndex
        }
    }


    display(){
        console.log(this.values);
        
    }
}


let heap = new Heap()

heap.insert(40)
heap.insert(30)
heap.insert(60)
heap.insert(450)
heap.insert(23)
heap.insert(49)
heap.insert(50)

heap.display()


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
//         let current = this.root

//         for(let i = 0 ; i < word.length;i++){
//             let charToInsert = word[i]

//             if(!(charToInsert in current.children)){
//                 current.children[charToInsert] = new Node()
//             }

//             current = current.children[charToInsert]
//         }

//         current.isWordEnd = true
//     }

//     collectWord(node,prefix,result){
//         if(node.isWordEnd){
//             result.push(prefix)
//         }

//         for(let char in node.children){
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

// trie.insert("cat")
// trie.insert("cart")
// trie.insert("carttle")
// trie.insert("bat")
// trie.insert("batter")

// console.log(trie.autoCompletion("ca"));




// class Node{
//     constructor(value){
//         this.left = null
//         this.value = value
//         this.right = null

//     }
// }

// class Tree{
//     constructor(){
//         this.root = null
//     }

//     inserNode(root,newNode){

//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.inserNode(root.left,newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.inserNode(root.right,newNode)
//             }
//         }

//     }

//     insert(value){
//        // console.log(value);
        
//         let newNode = new Node(value)
//         //console.log(newNode);
        
//         if(this.root===null){
//             this.root = newNode
//         }else{
//             this.inserNode(this.root,newNode)
//         }
//     }


//     findLargest(root){

//         let current = root
//         //console.log(current);
        
//         while(current.right){
//             current = current.right
//         }

//         return current.value
//     }


//     findSecondLargest(){
//         if(!this.root || !this.root.left && !this.root.right)
//         {
//             console.log("at least two node need");
//             return
            
//         }
//         let current = this.root
//         let parent = null

//         while(current.right){
            
//             parent = current
//             current = current.right
//         }


//         if(current.left){
//             return this.findLargest(current.left)
//         }

//         return parent.value
//     }
// }


// let tree = new Tree()

// tree.insert(50)
// tree.insert(30)
// tree.insert(70)
// tree.insert(80)
// tree.insert(100)

// //console.log(tree.findLargest(tree.));

// console.log(tree.findSecondLargest());

