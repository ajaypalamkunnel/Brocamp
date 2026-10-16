class doubleEndedQueue{
    constructor(){
        this.items = []
    }
    
    addFront(element){
        this.items.unshift(element)
    }
    
    addRear(element){
        this.items.push(element)
    }
    
    removeFront(){
        if(this.items.length===0){
            console.log("Queue is empty!!")
            return
        }
        return this.items.shift()
    }
    
    removeRear(){
        if(this.items.length===0){
            console.log("Queue is empty!!")
            return
        }
        return this.items.pop()
    }
    
    peekfront(){
        if(this.items.length ===0){
            console.log("Queue is empty!!")
            return
        }
        console.log("Front peek item is: ",this.items[0])
    }
    
    peekRear(){
       if(this.items.length ===0){
            console.log("Queue is empty!!")
            return
        } 
        console.log("Rear peek item is:",this.items[this.items.length-1])
    }
    
    print(){
        if(this.items.length ===0){
            console.log("Queue is empty!!");
            return
        } 
        
        console.log(this.items.join(' '))
    }
}


let dq = new doubleEndedQueue()

dq.addFront(4)
dq.addFront(40)
dq.addFront(400)
dq.addFront(4000)
dq.addFront(400000)
dq.peekfront()
dq.print()