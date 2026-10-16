class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }


    push(value){
        let node = new Node(value);

        if(!this.first){
            this.first = node;
            this.last = node;

        }else{
            let temp = this.first
            node.next = temp;
            this.first = node
        }
        this.size++
    }

    pop(){
        if(!this.first){
            console.log("Stack is empty!!!");
            
        }

        if(this.first === this.last){
            this.last = null;
        }

        this.first = this.first.next;
        this.size--
    }

    print(){

        if(!this.first){
            console.log("stack is empty!!!");
        }

        let current = this.first;

        while(current){
            console.log(current.value);
            current = current.next
        }
    }
}

let stack = new Stack()

stack.push(600)
stack.push(700)
stack.push(800)
stack.push(900)
stack.pop()
stack.print()


