// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     push(element){
//         let node = new Node(element)
//         if(this.isEmpty()){
//             this.first = node;
//             this.last = node;
//         }else{
//             let temp = this.first;
//             this.first = node;
//             this.first.next = temp;  
//         }
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             console.log("Stack is empty!!");
//             return   
//         }
//         let temp = this.first
//         if(this.first === this.last){
//             this.last = null;
//             return 
//         }

//         this.first = this.first.next;
//         this.size--

//         return temp.value;
//     }

//     print(){

//         if(this.isEmpty()){
//             console.log("stack is empty!!");
            
//         }
//         let current = this.first;
        
//         while(current){
//             console.log(current.value);
//             current = current.next;
//         }
//     }
// }

// let stack = new Stack()

// stack.push(11)
// stack.push(12)
// stack.push(13)
// stack.pop()
// stack.print()




// class Node{
//     constructor(element){
//         this.value = element;
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null;
//         this.bottom = null;
//         this.size = 0

//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     push(element){
//         let  node = new Node(element);

//         if(this.isEmpty()){
//             this.top = node;
//             this.bottom = node; 
//         }else{
//             let temp = this.top
//             this.top = node;
//             this.top.next = temp
//         }

//         this.size++
//     }


//     pop(){

//         if(this.isEmpty()){
//             console.log("Stack is empty!!");
//             return
            
//         }

//         let removed = this.top;
//         if(this.size===1){
//             this.top = null
//             this.bottom = null
//         }
//         this.top = this.top.next;
//         this.size--
//         return removed
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("stack is empty!!");
//             return 
//         }

//         let current = this.top;
//         while(current){
//             console.log(current.value);
//             current = current.next
//         }
//     }
// }

// let stack = new Stack()


// stack.push(4)
// stack.push(5)
// stack.push(6)
// stack.push(7)
// stack.print()
// console.log("Before pop");

// stack.pop()
// stack.print()



class Node{
    constructor(element){
        this.value = element;
        this.next = null
    }
}



class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0
    }


    isEmpty(){
        return this.size === 0
    }

    push(element){
        let node = new Node(element);
        if(this.isEmpty()){
            this.top = node;
            this.bottom = node
        }else{
            let temp = this.top;
            node.next = this.top;
            this.top = node;
        }
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is Empty!!");
            return 
            
        }else{
            if(this.size===1){
                let removed = this.top
                this.top = null;
                this.bottom =null
                return removed.value
            }else{
                let removed = this.top;
                this.top = this.top.next
                return removed
            }
            this.size--
        }
    }


    print(){

        if(this.isEmpty()){
            console.log("stack is empty");
           return 
        }

        let current = this.top;

        while(current){
            console.log(current.value);
            current = current.next 
        }
    }
}


let stack = new Stack();

stack.push(5)
stack.push(6)
stack.push(7)

stack.print()

console.log(stack.pop());

stack.print()