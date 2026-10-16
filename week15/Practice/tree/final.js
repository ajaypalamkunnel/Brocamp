class Node{
    constructor(value){
        this.left = null
        this.value = value
        this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
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
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }

    }
    insert(value){
       
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }


    //DFS

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


    // bfs

    bfs(){

        if(this.isEmpty){
            console.log("Tree is empty");
            return
        }
        let result = []
        let queue = []
        queue.push(this.root)

        while(queue.length){
            let curr = queue.shift()
            result.push(curr.value)

            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
        return result
    }


    brfs(){
        if(this.isEmpty()){
            console.log("empty");
            return   
        }

        let queue = []
        let result = []

        queue.push(this.root)

        while(queue.length){
            let curr = queue.shift()

            result.push(curr.value)

            if(curr.left){
                queue.push(curr.left)
            }

            if(curr.right){
                queue.push(curr.right)
            }
        }

        return result
    }


    search(root,value){
        if(!root){
            return false
        }else if(root.value === value){
            return true
        }else if(value < root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
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

    findSecondLargest(root){
        if(!root || !root.left && !root.right){
            console.log("Tree must have at least 2 nodes");
            return
        }


        let curr = root
        let parent = null


        while(curr.right){
            parent = curr
            curr = curr.right
        }


        if(curr.left){
            return this.findLargest(curr.left)
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

    FindHeigth(root){
        if(root === null){
            return -1
        }

        let leftHeight = this.FindHeigth(root.left)
        let rightHeight = this.FindHeigth(root.right)


        return Math.max(leftHeight,rightHeight) + 1
    }


    FSL(root){
        if(!root || !root.left && !root.right){
            console.log("Tree must have at least 2 nodes");
            return 
        }

        let curr = root
        let parent = null

        while(curr.right){
            parent = curr
            curr = curr.right
        }


        if(curr.left){
            return this.FL(curr.left)
        }
    }

    FL(root){
        let current = root

        while(current.right){
            current = current.right
        }

        return current.value

    }


}

let tree = new Tree()

tree.insert("AJAY")
tree.insert("SILPA")
tree.insert("SHEETHAL")
tree.insert("GOPI")
tree.insert("RAM")
tree.insert("ANJU")
tree.insert("RAM")
tree.insert("HNJU")
tree.insert("ZAM")
tree.insert("XNJU")
// tree.insert(100)
// tree.insert(90)

tree.preOrder(tree.root)

console.log("MIN = > ",tree.min(tree.root));
console.log("MAX = > ",tree.max(tree.root));
console.log("Tree Height = >",tree.FindHeigth(tree.root));
console.log("FSL => ",tree.FSL(tree.root));

