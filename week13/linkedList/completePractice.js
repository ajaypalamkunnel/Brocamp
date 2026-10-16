
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        //this.prev = null;
    }
}

class SlinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    
    insertFront(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
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
            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }
    
    insertIndex(value,index){
        
        if(index < 0 || index > this.size){
            console.log("Invalid Index")
        }
        
        if(index === 0){
            insertFront(value)
        }else if(index === this.size){
            insertLast(value)
        }else{
            let node = new Node(value);
            
            let prev = this.head;
            for(let i = 0 ; i < index-1 ; i++){
                prev = prev.next;
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }
    
    removeFont(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
          let remove = this.head;
          this.head = this.head.next
          this.size--;
        }
        
        
    }
    
    removeBack(){
        if(this.isEmpty()){
            console.log("List is empty")
            return
        }else if(this.size === 1){
            this.head = null;
            this.tail = null
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
    
    search(value){
        let current = this.head;
        
        let i = 0;
        while(current){
            if(current.value === value){
                console.log("search value found at : ",i)
                return null
            }
            current = current.next;
            i++
        }
        console.log("serach not found")
        return null
        
    }
    
    print(){
        let current = this.head;
        let listValues = '';
        
        while(current){
            listValues += `${current.value} `
            current = current.next
        }
        console.log(listValues)
        
    }
    
    
}

let list = new SlinkedList();

list.insertFront(100)
list.insertFront(200)
list.insertFront(300)
list.insertLast(6000)
list.insertIndex(111,2)
list.search(111)
list.print()
list.removeFont()
list.print()
list.removeBack()
list.print()

