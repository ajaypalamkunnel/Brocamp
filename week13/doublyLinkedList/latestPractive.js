// class Node{
//     constructor(value){
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }
    
//     isEmpty(){
//         return this.size === 0
//     }
    
//     insertFirst(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             this.head.prev = node.next;
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
    
//     insertLast(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             node.prev = this.tail;
//             this.tail.next = node;
//             this.tail = node
//         }
//         this.size++
        
//     }
    
//     insertIndex(value,index){
//         if(index < 0 || index > this.size){
//             console.log("Invalid indexx")
//             return null
//         }
//         let node = new Node(value)
//         if(index===0){
//             this.head = node;
//             this.tail = node;
//         }else if(index === this.size){
//             node.prev = this.tail;
//             this.tail.next = node;
//             this.tail = node
//         }else{
//             let previ = this.head;
            
//             for(let i = 0 ; i < index-1 ;i++){
//                 previ = previ.next
//             }
//             node.next = previ.next;
//             previ.next.prev = node;
//             node.prev = previ;
//             previ.next = node
//         }
        
//         this.size++
//     }
    
    
    
//     print(){
//         if(this.isEmpty()){
//             console.log("List is empty!!!")
//             return null
//         }
        
//         let current = this.head;
//         let listValues = ''
//         while(current){
//             listValues += `${current.value} `
//             current = current.next
//         }
        
//         console.log(listValues)
//     }
// }

// let list = new DoublyLinkedList()

// list.insertFirst(100)
// list.insertFirst(99)
// list.insertFirst(98)
// list.insertLast(777)
// list.insertLast(888)
// list.insertLast(999)
// list.insertIndex(500,2)
// list.print()



class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    isEmpty(){
        return this.size === 0;
    }
    
    insertEnd(value){
        
        
        let node = new Node(value)
        
        
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }
    
    
    print(){
        if(this.isEmpty()){
            console.log("List is empty!!");
            return null
        }
        let current = this.head;
        let listValues = '';
        while(current){
            listValues += `${current.value} `;
            current = current.next
        }
        console.log(listValues)
    }
}


let list = new DoublyLinkedList()

list.insertEnd(100)
list.insertEnd(200)
list.insertEnd(300)
list.insertEnd(400)
list.print()
