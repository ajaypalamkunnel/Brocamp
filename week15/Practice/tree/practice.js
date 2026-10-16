class Node{
    constructor(value){
        this.left = null
        this.value = value
        this.right = null
    }
}

class BSTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    inserNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.inserNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.inserNode(root.right,newNode)
            }
        }
    }

    insert(Value){
        let newNode = new Node(Value);

        if(this.root===null){
            this.root = newNode
        }else{
            this.inserNode(this.root,newNode)
        }
    }


    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
            
        }else{
            console.log("No root");
            
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)

        }else{
            console.log("No root");
            
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
            
        }else{
            console.log("No root");
            
        }
    }


    bfs(){
        
        let queue = []
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

    findLargest(root){
        if(!root)return 

        let current = root

        while(root.right){
            current = root.right
        }

        return current.value

    }


    findHeight(root){

        if(root === null){
            return -1
        }

        let leftHeight = this.findHeight(root.left)
        let rightHeight = this.findHeight(root.right)

        return Math.max(leftHeight,rightHeight)+1

    }

}


let tree = new BSTree()

tree.insert(50)
tree.insert(50)
tree.insert(64)
tree.insert(23)
tree.insert(53)
tree.insert(70)
tree.insert(90)

tree.inOrder(tree.root)
tree.bfs()

console.log("Min =>",tree.min(tree.root));


console.log("Tree Height=>",tree.findHeight(tree.root));
