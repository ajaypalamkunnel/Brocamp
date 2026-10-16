class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    
    isEmpty(){
        return this.size == 0;
    }
    
    insertFirst(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }
    
    insertLast(value){
        let node = new Node(value);
        
        if(this.isEmpty()){
            this.head = node 
            this.tail = node
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        
        this.size++
    }
    
    
    
    
    inserAtIndex(value,index){
        let node = new Node(value)
        if(index < 0 || index > this.size ){
            console.log("Invalid Index");
            return 
        }
        
        if(index === 0){
            this.insertFirst(value)
        }else{
            let prev = this.head
            
            for(let i = 0 ; i < index-1 ; i++){
                prev = prev.next;
            }
            node.next = prev.next
            prev.next = node;
        }
        this.size++
    }
    
    removeFront(){
        if(this.isEmpty()){
            console.log("List is empty");
            return
        }else{
            let removed = this.head;
            this.head = this.head.next
            this.size--
        }
        
    }
    
    removeLast(){
        if(this.isEmpty()){
            console.log("List is empty");
            return
        }
        
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            let prev = this.head;
            while(prev.next !== this.tail){
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev
        }
        this.size--
    }
    
    
    
    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }
        
        let current = this.head;
        let listValues = '';
        
        while(current){
            listValues += `${current.value} `;
            current = current.next;
        }
        console.log(listValues)
        console.log("List size : ",this.size)
    }
    
    
    
    
}

let list = new LinkedList()

list.insertFirst(500);
list.insertFirst(600);
list.insertFirst(700);
list.insertLast(900);
list.insertLast(80000);
list.inserAtIndex(100,2)
list.removeLast()
list.removeFront()
list.print()
list.print()