class Node{
    constructor(value){
        this.value = value;
        this.left = null
        this.right = null
    }

}


class bst{
    constructor(){
        this.root = null
    }


    isEmpty(){
        return this.root === null
    }

    insert(value){
        let newNode = new Node(value)

        if(this.isEmpty()){
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


    search(value){
        if(!this.root){
            return false
        }else{
            if(this.root.value === value){
                return true
            }else if(value < this.root.value){
                return this.search(this.root.left)
            }else{
                return this.search(this.root.right)
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
}


let mybst = new bst()
console.log(mybst.isEmpty());
mybst.insert(40)
mybst.insert(50)
mybst.insert(30)
mybst.insert(10)
mybst.insert(90)
console.log(mybst.isEmpty());