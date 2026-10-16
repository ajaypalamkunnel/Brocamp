class Node{
    constructor(value){
        this.value = value
        this.next = null

    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }


    push(value){

        let node = new Node(value)

        if(!this.first){
            this.first = node
            this.last = node
        }else{
            let temp = this.first
            this.first = node
            this.first.next = temp
        }
        this.size++
        
    }

    print(){
        if(!this.first){
            console.log("Stack is empty");
            return
        }else{
            let curr = this.first

            while(curr){
                console.log(` ${curr.value} `)
                curr = curr.next
            }
        }
    }



    pop(){

        if(!this.first){
            console.log("stack is empty");
            return null
            
        }

        let temp = this.first

        if(this.first === this.last){
            this.last = null
        }

        this.first = this.first.next
        this.size--

        return temp.value



    }



}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

stack.print()