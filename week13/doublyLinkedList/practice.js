
class Node{
    constructor(value){
        this.prev = null
        this.value = value;
        this.next = null;
    }
}

class DLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    
    isEmpty(){
        return this.size === 0;
    }
    
    insertFirst(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head
            this.head.prev = node;
            this.head = node
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
            this.tail = node
        }
        
        this.size++
    }
    
    
    removeFirst(){
        if(this.isEmpty()){
            console.log("List is empty");
            return
        }
        let removed = this.head;
        this.head = this.head.next;
        
        this.size--
        
    }
    
    removeLast(){
        if(this.isEmpty()){
           console.log("List is empty");
            return 
        }
        if(this.size===1){
            this.head = null;
            this.tail = null;
        }else{
            let previ = this.head;
            
            while(previ.next !== this.tail)
            {
                previ = previ.next
            }
            previ.next = null;
            this.tail = previ
        }
        
        this.size--
    }
    
    insertIndex(value,index){
        let node = new Node(value)
        if(index < 0 || index > this.size){
            console.log("Invvalid index");
            return
        }
        
        if(index === 0){
            insertFirst()
        }else if(index === this.size){
            insertLast()
        }else{
            let previ = this.head;
            
            for(let i = 0 ; i < index ; i++){
                previ = previ.next;
            }
            
            
            node.next = previ.next;
            node.previ = previ
            previ.next.prev = node;
            previ.next = node;
            
            // node.next = current.next;
            // node.prev = current;
            // current.next.prev = node;
            // current.next = node;
            
        }
        this.size++
        
    }
    
    reverse(){
        let prev = null;
        let curr = this.head;
        
        while(curr){
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp
        }
        this.head = prev
    }
    
    
    print(){
        let current = this.head;
        let listValues = ''
        while(current){
            listValues += `${current.value} `;
            current = current.next;
        }
        console.log(listValues)
    }
}

let list = new DLinkedList()


list.insertLast(2000)
list.insertFirst(900);
list.insertFirst(800);
list.insertFirst(700);
list.insertIndex(5500,2);
list.removeFirst()
//list.removeLast()
list.print()
list.reverse()
list.print()

















