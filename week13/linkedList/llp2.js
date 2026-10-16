class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList2{

    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
       return this.size === 0
    }

    insertAtFirst(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size++
    }

    insertAtLast(value){
        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node
        }else{

            let prev = this.head;
    
            while(prev.next){
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++


    }

    removeFromIndex(index){
        if(index < 0 || index>this.size){
            return null
        }
        let removedIndex;
        if(index === 0){
            removedIndex = this.head;
            this.head = removedIndex.head.next
        }else{
            let prev = this.head;

            for(let i = 0 ; i < index-1 ; i++){
                prev = prev.next
            }

            removedIndex = prev.next;
            prev.next = removedIndex.next;
            this.size--;
            return removedIndex.value;
        }
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }

        let i = 0;
        let curr = this.head;

        while(curr){
            if(curr.value===value){
                return i
            }
          curr =  curr.next;
          i++
        }
        return -1
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty");
            
        }else{
            let current = this.head;
            let listValues = ''

            while(current){
                listValues += `${current.value} `;
                current=current.next
            }
            console.log(listValues);
            
        }
    }

}

let list2 = new LinkedList2()
list2.print()
list2.insertAtFirst(100);
list2.insertAtLast(122343)
list2.print()
