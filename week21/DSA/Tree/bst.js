        class Node{
    constructor(value){
        this.value = value
        this.left = null
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
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left ===null){
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


    //depth first search DFS ==> PREORDER,INORDER,POSTORDER

    preorder(root){

        if(root){
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    inorder(root){

        if(root){
            this.preorder(root.left)
            console.log(root.value);
            this.preorder(root.right)
            
        }

    }



    postorder(root){
        if(root){
           this.postorder(root.left) 
           this.postorder(root.right) 
           console.log(root.value);
           
        }
    }
    //========================================

    //BFS


    levelOrder(){
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


 height(root){
    if(!root){
        return 0
    }
    let leftHeight=this.height(root.left)
    let rightHeight=this.height(root.right)
    return Math.max(leftHeight,rightHeight) +1
 }
}

const bst = new BinarySearchTree()

console.log(bst.isEmpty());

//console.log(bst.isEmpty());

bst.insert(10)
bst.insert(100)
bst.insert(140)
bst.insert(160)
bst.insert(1)

console.log("===>",bst.search(bst.root,1));
console.log("===>",bst.search(bst.root,21));

console.log("PREORDER==>");
bst.preorder(bst.root)
console.log("INORDER==>");
bst.inorder(bst.root)
console.log("POSTORDER==>");
bst.postorder(bst.root)
console.log("Level order");

bst.levelOrder()

console.log(bst.height(bst.root));

