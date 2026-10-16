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
        this.size = 0;
    }

    push(value){
        let node  = new Node(value)

        if(!this.first){
            this.first = node;
            this.last = node; 
        }else{
            let temp = this.first;
            this.first = node;
            this.first.next = temp; 
        }
        this.size++
    }

    pop(){
        if(!this.first){
            console.log("stack is empty!!");
            return null
        }
        let temp = this.first

        if(this.first === this.last){
            this.last = null
        }

        this.first = this.first.next;
        this.size--
        return temp.value
    }

    print(){
        if(!this.first){
            console.log("Stack is empty!!");
            
        }else{
            let current = this.first;
            while(current){
                console.log("|",current.value,"|");
                current = current.next;
            }
            
            console.log("______");
            

        }
    }


}

let stack = new Stack()

stack.push(44)
stack.push(45)
stack.push(46)
stack.pop()
stack.print()