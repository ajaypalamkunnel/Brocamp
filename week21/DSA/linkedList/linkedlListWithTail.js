class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    
    getSize(){
        return this.size;
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    prepend(value){
        let node = new Node(value)
        
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
    append(value){
        let node = new Node(value)
        
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }
        if(this.size === 1){
            this.head.next = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    
    removeFront(){
        if(this.isEmpty()){
            return null
        }
        if(this.size === 1){
            this.head = null
            this.tail = null
            
        }else{
            this.head = this.head.next
        }
        this.size--
    }
    
    findMiddle(){
        
        if(this.isEmpty()){
            console.log("List is empty")
            return null
        }
        let slow = this.head
        let fast = this.head
        
        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }
        
        return slow.value
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty!!")
        }else{
            
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
            
        }
    }
    
   
}

let list = new LinkedList()
list.prepend(50)
list.prepend(60)
list.prepend(70)
list.append(100)
console.log(list.getSize())
list.print()
list.removeFront()
list.print()