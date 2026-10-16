class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearch{
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

    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
            
        }
    }


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
}



let bstp = new BinarySearch()

bstp.insert(434)
bstp.insert(54)
bstp.insert(44)
bstp.insert(43)
bstp.insert(14)
console.log(bstp.isEmpty());
bstp.preorder(bstp.root)
console.log("BFS");

bstp.levelOrder()

