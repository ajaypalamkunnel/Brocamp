class Node{
    constructor(value){
        this.value = value;
        this.next = null
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
        let node = new Node(value)
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
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
        

    }




    printList(){
        let curr = this.head;
        let listValues = ''
        while(curr !== null){
            
                listValues += `${curr.value} `
            
            curr = curr.next;

        }
        console.log(listValues);
        
    }
}

let practiceList = new LinkedList()

practiceList.insertAtFirst(123)
practiceList.insertAtFirst(124)
practiceList.insertAtFirst(125)
practiceList.insertAtFirst(126)
practiceList.insertAtLast(12666)

practiceList.printList()

practiceList.insertAtLast()