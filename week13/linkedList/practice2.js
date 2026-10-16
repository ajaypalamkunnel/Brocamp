class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    insertAtFirst(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head;
            this.head = node
        }

        this.size++
    }

    insertAtLast(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++

    }


    insertAtIndex(value,index){
        if(index<0 || index>this.size){
            console.log(('Invalid Index'));  
        }

        if(index===0){
            this.insertAtFirst(value) 
        }else{
            let  node = new Node(value);

            let prev = this.head
            for(let i = 0 ; i < index-1 ; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node;
            this.size++
        }
    }



    removeFromFirst(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let removed = this.head;
            this.head = this.head.next
            this.size--;
            return removed  
        }
    }

    removeFromLast(){
        if(this.isEmpty()){
            console.log('list is empty');
        }
        if(this.size === 1){
            this.head = null;
            this.size--
        }else{
            let curr = this.head;

            while(curr){
                
            }
        }
    }










    print(){
        let current = this.head;
        let listValues = '';

        while(current){
            listValues += `${current.value} `;
            current = current.next;
        }

        console.log(listValues);
    }
}

let list = new LinkedList()

list.insertAtFirst(100)
list.insertAtFirst(1000)
list.insertAtLast(2000)
list.print()