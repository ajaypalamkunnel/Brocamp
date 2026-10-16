// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinaryTree{
//     constructor(){
//         this.root = null;
//     }

//     isEmpty(){
//         return this.root === null;
//     }

//     insert(value){
//         let newNode = new Node(value)
//         if(this.root === null){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left= newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }


//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value === value){
//                 return true
//             }else if(value < root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }
    

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right)
//         }
        
//     }


//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
            
//         }
//     }


//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
            
//         }
//     }


//     levelOrder(){
//         const queue = []
//         queue.push(this.root);

//         while(queue.length){
//             let curr = queue.shift();
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }

//             if(curr.right){
//                 queue.push(curr.right)
//             }
            
//         }
//     }





// }



// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }


// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }


//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         let newNode = new Node(value)
//         if(this.root === null){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }


//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left===null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right=== null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }


//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right)
            
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
            
//         }
//     }


//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
            
//         }
//     }

//     search(value,root){
//         if(!root){
//             return false
//         }else{
//             if(root.value === value){
//                 return true
//             }else if(value < root.value){
//                return this.search(value,root.left)
//             }else{
//                 return this.search(value,root.right)
//             }
//         }

        
//     }


//     levelOrder(){
//         const queue = []

//         queue.push(this.root)

//         while(queue.length){
//             let curr = queue.shift()

//             console.log(curr.value);

//             if(curr.left){
//                 queue.push(curr.left)
//             }
            
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
// }




// let tree = new BinarySearchTree()


// tree.insert(80)
// tree.insert(40)
// tree.insert(88)
// tree.insert(98)
// tree.insert(67)

// tree.preOrder(tree.root)
// console.log("Post order");

// tree.postOrder(tree.root)
// console.log("inorder");
// console.log(tree.search(88,tree.root));

// tree.inOrder(tree.root)



// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }


//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         let newNode = new Node(value)

//         if(this.root === null){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }


//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode;
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }
    

//     search(root,value){
//         if(root === null){
//             return false
//         }else{

//             if(root.value === value){
//                 return true
//             }else if(value < root.value){
//                 this.search(root.left,value)
//             }else{
//                 this.search(root.right,value)
//             }
//         }
//     }


//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){

//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
            
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
            
//         }

//     }


//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             this.max(root.right)
//         }
//     }
    



// }






// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }


//     insert(value){
//         let newNode = new Node(value);

//         if(this.root === null){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }   



//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }


//     search(root,value){
//         if(root === null){
//             return false
//         }else{
//             if(value === root.value){
//                 return true
//             }else if(value < root.value){
//                 this.search(root.left,value)
//             }else{
//                 this.search(root.right,value)
//             }
//         }
//     }


//     bfs(){
//         if(this.isEmpty()){
//             console.log("Treee is empty");
//             return
//         }
//         let queue = [];

//         queue.push(this.root)

//         while(queue.length){

//             let curr = queue.shift()

//             console.log(curr.value);

//             if(curr.left){
//                 queue.push(curr.left)
//             }

//             if(curr.right){
//                 queue.push(curr.right)
//             }
            
//         }

//     }


//     findSecondLargest(root){
//         if(!root || (root.left && root.right)){
//             console.log("Tree must have at least 2 nodes");
//             return
//         }


//         let current = root;
//         let parent = null;

//         while(current.right){
//             parent = current;
//             current = current.right
//         }

//         if(current.left){
//             return this.findLargest(current.left)
//         }

//         return parent.value
//     }

    

//     findLargest(root){
//         let current = root

//         while(current.right){
//             current = current.right
//         }

//         return current.value
//     }
// }


// let tree = new BinarySearchTree()


// tree.insert(10)
// tree.insert(5)
// tree.insert(15)
// tree.insert(3)
// tree.insert(7)


// tree.bfs()

// console.log("Largest = ",tree.findLargest(tree.root));



// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }


// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         let newNode = new Node(value)

//         if(this.root === null){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){

//         if(newNode.value <  root.value){
//              if(root.left === null){
//                 root.left = newNode
//              }else{
//                 this.insertNode(root.left,newNode)
//              }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)

            
//         }
//     }
// }





 class Node{
    constructor(value){
        this.left = null
        this.value = value
        this.right = null

    }
 }


 class BinarySearchTree{
    constructor(){
        this.root = null
    }


    insert(value){
        let newNode = new Node(value);

        if(this.root===null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){

        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = null
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                this.search(root.left,value)
            }else{
                this.search(root.right,value)
            }
        }
    }

    isEmpty(){
        return this.root === null
    }

    bfs(){
        if(this.isEmpty()){
            console.log("Tree is empty");
            return
        }

        let queue = [];

        queue.push(this.root)

        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }

            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }


    findSecondLargest(root){
        if(!root || (!root.left && !root.right)){
            console.log("Tree must have at least 2 nodes");
        return
        }


        let currnt = root;
        let parent = null;

        while(currnt.right){
            parent = currnt;
            currnt = currnt.right
        }

        if(currnt.left){
            return this.findLargest(currnt.left)
        }

        return parent.value
    }


    findLargest(root){
        let current = root

        while(current.right){
            current = current.right
        }

        return current.value
    }


    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
            
            
        }
    }


    
 }