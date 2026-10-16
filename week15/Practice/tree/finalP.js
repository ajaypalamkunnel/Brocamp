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

    insert(value){
        let newNode = new Node(value)
        

        if(this.root===null){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
        
    }

    insertNode(root,newNode){
        if(newNode.value < root.value)
        {
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

    search(root,value){

        if(!root){
            return false
        }else if(root.value === value){
            return true
        }else if(value < root.value){
            this.search(root.left,value)
        }else{
            this.search(root.right,value)
        }

    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    min(root){
        if(root){
            if(!root.left){
                return root.value
            }else{
                this.min(root.left)
            }
        }
    }

    max(root){
        if(root){
            if(!root.right){
                return root.value
            }else{
                this.mxn(root.right)
            }
        }
    }


    findLargest(root){
        let current = root;

        while(current.right){
            current = current.right;
        }
        return current.value
    }

    fsl(root){
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

    findHeight(root){

        if(root===null){
            return -2
        }

        let leftHeight = this.findHeight(root.left)
        let rightHeight = this.findHeight(root.right)

        return Math.max(leftHeight,rightHeight)+1

    }

        
}