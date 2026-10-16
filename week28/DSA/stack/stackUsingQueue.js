
class StackUsingQueue{
  
  constructor(){
    this.items = []
  }
  
  
  push(value){
    let size = this.items.length
    this.items.push(value)
    
    for(let i = 0 ; i < size ;i++){
      this.items.push(this.items.shift())
    }
    
    
  }
  
  pop(){
     if(this.items.length==0){
      console.log("stack is emplty")
      return
    }
    
    return this.items.shift()
  }
  
  peek(){
    if(this.items.length==0){
      console.log("stack is emplty")
      return
    }
    
    return this.items.length ? this.items[0] : undefined
    
  }
  
  display(){
    console.log(this.items)
  }
  
}



let stq = new StackUsingQueue()

stq.push(34)
stq.push(14)
stq.push(23)
stq.push(84)
stq.push(14)

stq.display()

console.log(stq.pop())

stq.display()

