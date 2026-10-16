

class QueueUsingStack{
  
  constructor(){
    this.stack1 = []
    this.stack2 = []
  }
  
  enqueue(value){
    this.stack1.push(value)
  }
  
  dequeue(){
    
    if(this.stack2.length===0){
      
      while(this.stack1.length > 0){
        this.stack2.push(this.stack1.pop())
      }
      
    }
    
    if(this.stack2.length==0){
       console.log("Queue is empty");
      return;
    }
    
    return this.stack2.pop()
  }
  
}




