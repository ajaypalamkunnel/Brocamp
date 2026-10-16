// class Queue{
//     constructor(){
//         this.items = {}
//         this.rear = 0
//         this.front = 0

//     }

//     enqueue(element){
//         this.items[this.rear] = element;
//         this.rear++
//     }

//     dequeue(){
//         let deleted = this.items[this.front]
//         delete this.items[this.front];
//         this.front++
//     }

//     print(){
//         console.log({...this.items});
        
//     }
// }


// let myQ = new Queue()

// myQ.enqueue(3)
// myQ.enqueue(30)
// myQ.enqueue(300)

// myQ.print()



// class Queue{
//     constructor(){
//         this.items = {}
//         this.front = 0
//         this.rear = 0
//     }


//     isEmpty(){
//         return this.front - this.rear === 0
//     }

//     enqueue(element){
//         this.items[this.rear] = element
//         this.rear++
//     }

//     dequeue(){
//         let temp = this.items[this.front]
//         delete this.items[this.front]
//         this.front++

//         if(this.isEmpty()){
//             this.front = 0
//             this.rear = 0
//         }

//         return temp
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log("stack is empty"); 
//         }else{
//             console.log(this.items[this.front]);
            
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("stack is empty");  
//         }else{
//             console.log({...this.items});  
//         }
//     }
// }


// let queue = new Queue()

// queue.enqueue(5)
// queue.enqueue(4)
// queue.enqueue(3)
// queue.enqueue(2)

// queue.print()
// queue.peek()



class Queue{
    constructor(){
        this.items = {}
        this.front = 0
        this.rear = 0
    }


    isEmpty(){
        return this.rear - this.front === 0;
    }


    size(){
        return this.rear - this.front
    }


    enQueue(element){  
            this.items[this.rear] = element;
            this.rear++
    }

    deQueue(){
        if(this.isEmpty()){
            console.log("queue is empty!!");
            return 
        }

        let removed = this.items[this.front];
        delete this.items[this.front];
        this.front++
        return removed
    }

    peek(){
        if(this.isEmpty()){
            console.log("queue is empty!!");
            return
        }else{
            console.log("Peek element : ",this.items[this.front]);
            return
        }
    }

    reverse(){
        if(this.isEmpty()){
            console.log("queue is empty!!");
            return
        }else{
        let stack = [];

            while(!this.isEmpty()){
                stack.push(this.deQueue())
            }

            while(stack.length>0){
                this.enQueue(stack.pop())
            }
        }


    }


    reverseUsingRecursion(){
        if(this.isEmpty()){
            return
        }

        let front = this.deQueue();

        this.reverseUsingRecursion()

        this.enQueue(front)
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is empty!!!");
            return
        }else{
            console.log({...this.items});
            
        }
    }
}



let myq = new Queue()
myq.enQueue(45)
myq.enQueue(35)
myq.enQueue(64)
myq.enQueue(434)
myq.enQueue(408)
console.log(myq.deQueue());
myq.peek()


myq.print()



console.log("Original Queue:");
myq.print();  // Print initial queue

myq.reverse();

console.log("Reversed Queue:");
myq.print();  // Print queue after reversing

console.log("Original Queue:");
myq.print();  // Print initial queue

myq.reverseUsingRecursion();

console.log("recursive Reversed Queue:");
myq.print();  // Print queue after reversing



