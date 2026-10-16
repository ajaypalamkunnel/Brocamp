class Stack{
    constructor(){
        this.stack = []
    }


    isEmpty(){
        return this.stack.length ===0
    }

    size(){
        return this.stack.length
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            
        }else{

            return this.stack.pop()
        }
    }
    
    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty");
        }else{
            return this.stack[this.stack.length-1]
        }
    }

    reverse(){
        let auxStack1 = new Stack()
        let auxStack2 = new Stack()

        while(!this.isEmpty()){
            auxStack1.push(this.stack.pop())
        }
        //console.log("1",auxStack1);
        
        while(!auxStack1.isEmpty()){
            auxStack2.push(auxStack1.pop())
        }
        //console.log("2",auxStack2);
        while(!auxStack2.isEmpty()){
            this.stack.push(auxStack2.pop())
        }

    }


    display(){
        console.log("Stack elememnts are : ",this.stack);
        
    }
}



let myStack = new Stack();

myStack.push(10);
myStack.push(100);
myStack.push(1000);
myStack.push(20);
myStack.push(3000);



console.log("Original stack:");
myStack.display();


myStack.reverse()
myStack.display();