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
        let node = new Node(value)
        if(!this.first){
            this.first = node;
        }else{
            //let temp = this.first;
            node.next = this.first;
            this.first = node
        }
        this.size++
    }


    pop(){
        if(!this.first){
            console.log("stack is empty!!!");
            return
        }
        if(this.first===this.last){
            let removed = this.last.value;
            this.last = null;
            this.size--
            return removed
        }else{
            let removed = this.first.value;
            this.first = this.first.next
            this.size--;
            return removed
        }
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

function insertor(arr){

    arr.forEach(element => {
        stack.push(element)
    });

    stack.print()

}

function remover(count){
    for(let i = 1 ; i <= count ; i++){
        console.log(stack.pop()," removed");
    }
}

insertor([1,2,3,4,5])

remover(2)