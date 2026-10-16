class Stack{
    constructor(){
        this.stack = []
    }

    size(){
        return this.stack.length
    }

    isEmpty(){
        return this.stack === 0
    }


    push(value){
        this.stack.push(value)
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return null
        }
        return this.stack.pop()
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty"); 
            return null 
        }

        return this.stack[this.stack.length-1]
    }

    sort(){
        const tempStack = new Stack()

        while(!this.isEmpty()){
            const current = this.pop()


            while(!tempStack.isEmpty() && tempStack.peek() > current)
            {
                this.push(tempStack.pop())
            }

            tempStack.push(current)
        }

        while(!tempStack.isEmpty()){
            this.push(tempStack.pop())
        }
    }


    removeMiddle(){

        let size = this.stack.length
        let middleIndex = Math.floor(size/2)

        const removeRecursive=(currentIndex) =>{

            if(middleIndex===currentIndex){
                this.pop()
                return 
            }

            let temp = this.pop()


            removeRecursive(currentIndex+1)

            this.push(temp)
        }


        removeRecursive(0)
    }





    printStack() {
        console.log("Stack elements:", this.stack);
    }




}

let myStack = new Stack()

myStack.push(3)
myStack.push(30)
myStack.push(343)
myStack.push(36)
myStack.sort()
myStack.printStack()