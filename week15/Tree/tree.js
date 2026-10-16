class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree{
    constructor() {
        this.root = null
    }


    isEmpty(){
        return this.root ===  null
    }

    //----------- insert -------------------------
    insert(value){
        let newNode = new Node(value)
        if(this.root===null){
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
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
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
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value); 
            this.inOrder(root.right);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value );
            
        }
    }

    //DFS
    levelOrder(){

        if(this.isEmpty()){
            console.log("Tree is empty");
            return
        }
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
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
       } else{
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

    let current = root
    let parent = null;

    while(current.right){
        parent = current
        current = current.right;
    }

    // Case 1: The largest node has a left subtree
    if(current.left){
        return this.findLargest(current.left)
    }

    // Case 2: The largest node has no left subtree
    return parent.value;

}


findLargest(root){
    let current = root

    while(current.right){
        current = current.right    
    }

    return current.value
}

//pending
delete(value){
    this.root = this.deleteNode(this.root,value)
}

deleteNode(root, value){
    if(root===null){
       return root 
    }

    if(value < root.value){
        root.left = this.deleteNode(root.left, value)
    }else if(value > root.value){
        root.right = this.deleteNode(root.right,value)
    }else{
        if(!root.left && !root.right){
            return null;
        }

        if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }
        let minValue = this.min(root.right);
        root.value = minValue; // Replace value with in-order successor
        root.right = this.deleteNode(root.right, minValue);
    }

    return root   


}

}




let tree = new BinarySearchTree()

console.log("Tree is empty : ",tree.isEmpty() ? 'Yes' : 'NO');


tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)

console.log("Tree is empty : ",tree.isEmpty() ? 'Yes' : 'NO');


console.log(tree.search(tree.root,15));
console.log(tree.search(tree.root,153));
console.log("Preorder");
tree.preOrder(tree.root)
console.log("Inorder");
tree.inOrder(tree.root)
console.log("Postorder");
tree.postOrder(tree.root);
console.log("BFS");

tree.levelOrder()



console.log("Min value in the tree : ",tree.min(tree.root));

console.log("Max value in the tree : ",tree.max(tree.root));


console.log("Largest element : ",tree.findLargest(tree.root));
console.log("Second Largest element : ",tree.findSecondLargest(tree.root));

