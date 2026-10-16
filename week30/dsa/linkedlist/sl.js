class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LL{
    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.size==0
    }

    prepend(value){

        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node
        }else{
           node.next = this.head;
           this.head = node 
        }

        this.size++


    }


    
}