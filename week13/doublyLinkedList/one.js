// class Node{
//     constructor(value){
//         this.value = value;
//         this.prev = null;
//         this.next = null
//     }
// }

// class DLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     prepend(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             node.next = this.head;     
//         }

//         if(this.head){
//             this.head.prev = node;
//         }
//         this.head = node;
//         this.size++
//     }


    
//     appendP(value){
//         let node = new Node(value);

//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let current = this.head;

//             while(current.next){
//                 current = current.next;
//             }

//             node.prev = current;
//             current.next = node
//         }
//         this.size++
//     }


//     addAtIndex(value,index  ){
         
//     }
// }


class Node{
    constructor(value){
        this.prev = null;
        this.value = value;
        this.next = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    isEmpty(){
        return this.size === 0
    }


    insertAtIndex(value,index){
        if(index < 0 || index > this.size){
            console.log("Invalid Index");
            return 
        }

        let newNode = new Node(value);


        if(index === 0){
            if(this.head === null){
                this.head = newNode;
                this.tail = newNode;
            }else{
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;

            }
        }else if(index === this.size){
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }else{
            let current = this.head;

            for(let i = 0 ; i < index-1 ; i++){
                current = current.next;
            }
            newNode.next = current.next
            newNode.prev = current;
            current.next.prev = newNode
            current.next = newNode;

        }
        this.size++
    }



    removeFirst(){
         if(this.isEmpty()){
            console.log("array is empty");
            return
         }

         this.head = this.head.next;
         if(this.head){
            this.head.prev = null;
         }
    }

    removeLast(){
        if(this.isEmpty()){
            console.log("array is empty");
            return
         }

         if(this.size===1){
            this.head = null
         }
    }
}

let list = new DoublyLinkedList();



