
class Stack{
  
  constructor(){
    this.items = []
  }
  
  isEmpty(){
    return this.items.length===0
  }
  
  push(value){
    this.items.push(value)
  }
  
  
  pop(){
    if(this.items.length===0){
      console.log("stack is empty")
      return;
    }
    return this.items.pop()
  }
  
  peek(){
    if(this.items.length===0){
      console.log("stack is empty")
      return;
    }
    return this.items[this.items.length-1]
  }
  
  
  print(){
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    }
    console.log(this.items.join("<-"))
  }
  
  sort(stack){
    
    let tempStack = new Stack()
    
    while(!stack.isEmpty()){
      
      let temp = stack.pop();
      
      while(!tempStack.isEmpty() && tempStack.peek() > temp){
        stack.push(tempStack.pop())
      }
      
      tempStack.push(temp)
    }
    
    while(!tempStack.isEmpty()){
      stack.push(tempStack.pop())
    }
    
  }
  
  
  reverese(){
    
    let temp1 = new Stack()
    let temp2 = new Stack()
    
    while(!this.isEmpty()){
      
      temp1.push(this.items.pop())
    }
    
    while(!temp1.isEmpty()){
      temp2.push(temp1.pop())
    }
    
    while(!temp2.isEmpty()){
      this.items.push(temp2.pop())
    }
   
    
  }
  
}

let stack = new Stack()

stack.push(1)
stack.push(82)
stack.push(90)
stack.push(4)
stack.print()
stack.reverese()
stack.sort(stack)
stack.print()