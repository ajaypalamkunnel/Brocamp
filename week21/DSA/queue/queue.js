class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    isEmpty(){
        return this.items.length === 0
    }


    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return 
        }

        return this.items.shift()
    }

    front(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return 
        }
        return this.items[0]

    }

    size(){
        return this.items.length
    }

    print(){
        console.log("Queue => ",this.items);
        
    }


    revereseQueue(){
        let stack = []

        while(!this.isEmpty()){
            stack.push(this.dequeue())
        }

        while(stack.length !== 0){
            this.enqueue(stack.pop())
        }
    }
}


let myQueue = new Queue()

myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(30)

myQueue.print()
myQueue.revereseQueue()
console.log("reversed");
myQueue.print()

