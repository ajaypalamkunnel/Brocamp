//  class Queue{
//     constructor(){
//        this.items = []; 
//     }

//     enqueue(element){
//        this.items.push(element)
//     }

//     dequeue(){
//        return this.items.shift()
//     }


//     isEmpty(){
//        return this.items.length === 0
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }

//     size(){
//         return this.items.length
//     }


//     print(){
//         console.log(this.items.toString());
        
//     }
//  }

//  let queue = new Queue()

//  queue.enqueue(53)
//  queue.enqueue(43)
//  queue.enqueue(553)
//  queue.enqueue(50)
//  queue.enqueue(343)



//  queue.print()
 
//  console.log(queue.dequeue());
 
//  queue.print()


//  console.log(queue.peek());
 



class Queue{
   constructor(){
      this.items = [];

   }

   enqueue(element){
      this.items.push(element)
   }


   dequeue(){
      return this.items.shift()
   }

   isEmpty(){
      return this.items.length === 0
   }

   peek(){
      if(!this.isEmpty()){
         return this.items[0] 
      }
   }

   size(){
      return this.items.length
   }


   print(){
      console.log(...this.items);
      
   }

}

let queue = new Queue()

queue.enqueue(3)
queue.enqueue(300)
queue.enqueue(12)
queue.enqueue(314)
queue.enqueue(98)
queue.enqueue(89)

queue.print()