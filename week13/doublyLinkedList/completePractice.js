
class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    
    insertFirst(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }
    
    insertLast(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }
    
    
    insertIndex(value,index){
        if(index < 0 || index > this.size){
            console.log("Invalid index");
            return null
        }
        
            let node = new Node(value)
        if(index === 0){
            if(this.head === null){
                this.head = node;
                this.tail = node;
            }else{
                node.next = this.head
                this.head.prev = node
                this.head = node;
            }
        }else{
            let prev = this.head;
            
            for(let i = 0; i < index-1 ; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next.prev = node;
            prev.next = node;
            node.prev = prev;
        }
    }
    
    removeFront(){
        if(this.isEmpty()){
            console.log("list is empty");
            return null
        }
        this.head = this.head.next;
        if(this.head){
            this.head.prev = null
        }
        this.size--
    }
    
    removeLast(){
       if(this.isEmpty()){
            console.log("list is empty");
            return null
        }
        
        if(this.size === 1){
            this.head=null;
            this.tail=null
        }else{
            let prev = this.head;
            
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null;
            this.tail = prev
        }
        this.size--
    }
    
    print(){
        let curr = this.head;
        let listValues = '';
        while(curr){
            listValues += `${curr.value} `;
            curr = curr.next
        }
        
        console.log(listValues)
    }
}

let list = new DLinkedList();

list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
list.insertLast(700)
list.insertLast(800)
list.removeFront()
list.insertIndex(600,2)
list.removeLast()
list.print()