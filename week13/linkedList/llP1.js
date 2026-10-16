class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size == 0
    }

    insertFirst(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head;//important 
            this.head = node;
        }
        this.size++
    }


    insertLast(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head;
            while(prev.next){
                prev += prev.next
            }
            prev.next = node
        }    
        this.size++
    }

    insertAtIndex(value,index){
        if(index<0 || index>this.size){
            return
        }

        if(index ===0){
            this.insertFirst(value)
        }else{
            const node = new Node(value)

            let prev = this.head
            for(let i = 0 ; i < index-1;i++){
                prev = prev.next 
            }

            node.next = prev.next;
            prev.next = node;
            this.size++ 
        }
    }


    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            let current = this.head;
            let listValues = '';
            while(current){
                listValues += `${current.value} `
                current = current.next
            }

            console.log(listValues);
            
        }
    }
}


let list1 = new LinkedList();


list1.print()
list1.insertLast(100);
list1.insertLast(200);
list1.insertAtIndex(500,2)

list1.print()