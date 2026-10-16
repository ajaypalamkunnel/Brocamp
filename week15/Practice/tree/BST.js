// class Node{
//     constructor(value){
//         this.left = null;
//         this.value = value;
//         this.right = null
//     }
// }


// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null;
//     }

//     insert(value){
//         let newNode = new Node(value)

//         if(this.root === null){
//             this.root = newNode
//         }else{
//             this.inserNode(this.root,newNode)
//         }
//     }

//     inserNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left===null){
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

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
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


//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.min(root.right)
//         }
//     }

//     BFS(){
//         if(this.isEmpty()){
//             console.log("Tree is Empty");
//             return 
//         }
//         const queue = []
//         queue.push(this.root)

//         while(queue.length){
//             let current = queue.shift()
//             console.log(current.value);

//             if(current.left){
//                 queue.push(current.left)
//             }

//             if(current.right){
//                 queue.push(current.right)
//             }
            
//         }
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }


//     deleteNode(root,value){
//         // if the treee is empty
//         if(root === null){
//               return root
//         }

//         if(value < root.value){
//             root.left = this.deleteNode(root.left,value)
//         }else if(value > root.value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             // if the value is equalto root 
            
//             if(!root.left && !root.right){//if it is leaf node
//                 return null
//             }

//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }

//             root.value = this.root.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }

//         return root 
//     }




    



// }


// let tree = new BinarySearchTree()

// tree.insert(72)
// tree.insert(16)
// tree.insert(42)
// tree.insert(62)
// tree.insert(19)
// console.log("------PRE ORDER-------");
// tree.preOrder(tree.root)
// console.log("------POST ORDER-------"); 
// tree.postOrder(tree.root)
// console.log("------INORDER ORDER-------");
// tree.inOrder(tree.root)
// console.log("-----MIN VALUE------>",tree.min(tree.root));
// console.log("-----MIN VALUE------>",tree.max(tree.root));
// console.log("-----BFS TRAVERSAL------>");
// tree.BFS()



// //console.log(tree);





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


    isEmpty(){
        return this.root === null
    }


    insert(value){
        let newNode = new Node(value);

        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left===null){
                root.left = newNode
            }else{
                return this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right = newNode
            }else{
                return this.insertNode(root.right,newNode)
            }

        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
            
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
            
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
            
            
        }
    }

    BFS(){

        if(this.isEmpty()){
            console.log("Tree is empty");
            return
        }

        let queue = []
        queue.push(this.root)

        while(queue.length){
            let current = queue.shift()
            console.log(current.value);

            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }

    min(root){
        if(root){
            if(!root.left){
                return root.value
                
            }else{
                return this.min(root.left)
            }
        }
    }


    max(root){
        if(root){
            if(!root.right){
                return root.value
            }else{
                return this.max(root.right)
            }
        }
    }

    // delete(value){
    //     this.root = this.deleteNode(this.root,value)
    // }


    // deleteNode(root,value){
    //     // if the treee is empty
    //     if(root === null){
    //           return root
    //     }

    //     if(value < root.value){
    //         root.left = this.deleteNode(root.left,value)
    //     }else if(value > root.value){
    //         root.right = this.deleteNode(root.right,value)
    //     }else{
    //         // if the value is equalto root 
            
    //         if(!root.left && !root.right){//if it is leaf node
    //             return null
    //         }

    //         if(!root.left){
    //             return root.right
    //         }else if(!root.right){
    //             return root.left
    //         }

    //         root.value = this.root.min(root.right)
    //         root.right = this.deleteNode(root.right,root.value)
    //     }

    //     return root 
    // }

    // delete(value){
    //     this.root = this.deleteNode(this.root,value)
    // }


    // deleteNode(root,value){
    //     if(root===null){
    //         return root
    //     }

    //     if(value < root.value){
    //         return this.deleteNode(root.left,value)
    //     }else if(value > root.value){
    //         root.right = this.deleteNode(root.right,value)
    //     }else{
    //         if(!root.left && !root.right){
    //             return null
    //         }

    //         if(!root.left){
    //             return root.right
    //         }else if(!root.right){
    //             return root.left
    //         }

    //         root.value = this.root.min(root.right)
    //         root.right = this.deleteNode(root.right,root.vale)
    //     }

    //     return root
    // }


    delete(value){
        this.root = this.deleteNode(this.root,value)
    }


    deleteNode(root,value){
        if(root===null){
            return null
        }

        if(value < root.value){
            return this.deleteNode(root.left,value)
        }else if(value > root.value){
            return this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }

            if(!root.left){
                return root.right
            }


            if(!root.right){
                return root.left
            }

            root.value = this.root.min(root.right)
            root.right = this.deleteNode(root.right,root.value)

            
        }

       
    }
}


let tree = new BinarySearchTree()

console.log(tree.isEmpty());



tree.insert(72)
tree.insert(16)
tree.insert(42)
tree.insert(62)
tree.insert(19)
console.log("------PRE ORDER-------");
tree.preOrder(tree.root)
console.log("------IN ORDER-------");
tree.inOrder(tree.root)
console.log("------BFS-------");
tree.inOrder(tree.BFS())

tree.delete(16)

console.log("-----MIN VALUE------>",tree.min(tree.root));
console.log("-----MAX VALUE------>",tree.max(tree.root));