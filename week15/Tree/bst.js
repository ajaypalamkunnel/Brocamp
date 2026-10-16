class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



class BinarySearchTree{
    constructor(){
        this.root = null
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
            if(root.left === null){
                root.left = newNode
            }else {
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

    isEmpty(){
        return this.root === null
    }


    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
            
        }
    }



    dfs(){
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
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
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
            current = current.right
        }

        if(current.left){
            return this.findLargest(current.left)
        }

        return parent.value;
    }




    findLargest(root){
        let current = root;

        while(current.right){
            current = current.right
        }

        return current.value
    }
}

let graph = new BinarySearchTree()

graph.insert(10)
graph.insert(20)
graph.insert(30)
graph.insert(40)

//console.log(graph);
graph.preOrder(graph.root)
console.log(graph.search(graph.root,30));
console.log("-----bfs-----");

graph.bfs()

