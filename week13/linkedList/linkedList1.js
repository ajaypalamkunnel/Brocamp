// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null 
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }


//     //push
//     push(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             this.next = this.head;
//             this.head = node
//         }
//         this.size++
//     }



// }

// const list = new LinkedList()

// console.log("Linked list empty : ",list.isEmpty());
// console.log('List size : ',list.getSize());




// class Node{
//     constructor(value,next=null){
//         this.data = value;
//         this.next = next
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }


//     isEmpty(){
//         return this.size===0 
//     }
// }




class Node{
    constructor(value,next){
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
        return this.size === 0
    }


    insertFirst(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;                        
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertAtLast(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;

            while(prev.next){
                prev = prev.next
            }
            prev.next = node;

        }
        this.size++
    }

    insertAtIndex(value,index){
        if(index<0 || index>this.size){
            return
        }

        if(index===0){
            this.insertFirst(value)
        }else{
            const node = new Node(value);

            let prev = this.head;
            for(let i = 0 ; i < index-1;i++){
                prev = prev.next
            }

            node.next = prev.next;
            prev.next = node
            this.size++
        }
    }


    removeFromIndex(index){
        if(index<0 || index>this.size){
            return null
        }
        let removedNode;
        if(index === 0){
            removedNode = this.head;
            this.head = removedNode.head.next
        }else{
            let prev = this.head
            for(let i = 0 ; i < index - 1;i++){
                prev = prev.next
            }
            removedNode = prev.next;
            prev.next = removedNode.next
            this.size--
            return removedNode.value
        }
    }


    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        // if value in first node
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--
            return value
        }else{
            let prev = this.head;

            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }

            if(prev.next){
                let removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value
            }
            return null
        }
    }


    search(value){
        if(this.isEmpty()){
            return -1
        }

        let i = 0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i
            }

            curr = curr.next;
            i++;
        }

        return -1
    }


    reverse(){
        let prev = null;
        let curr = this.head;

        while(curr){
            let NextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = NextTemp
            
        }
        this.head = prev
    }

     

    //print list
    print(){
        if(this.isEmpty()){
            console.log("List is Empty");
            
        }else{
            let curr = this.head;
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
            
        }
    }

}


let list = new LinkedList()

list.print();

list.insertFirst(100);
list.print()
list.insertFirst(200);
list.insertFirst(300);
list.insertFirst(400);

list.print()

console.log(list.removeFromIndex(2));
list.print()
console.log(list.search(100));
 
list.reverse()
list.insertAtLast(777)
list.print()