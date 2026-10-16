
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class DL{

    constructor(){
        this.head = null;
        this.size = 0
        this.tail = null
    }

    isEmpty(){
        return this.size ==0
    }

    prepend(value){

        let node = new Node(value)

        if(this.isEmpty()){
            this.head = this.tail = node
        }else{

            node.next = this.head;
            this.head.prev = node;
            this.head = node
        }

        this.size++
    }

    append(value){

        let node = new Node(value)
        if(this.isEmpty()){
            this.head = this.tail = node
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node  
        }        
        this.size++;
    }


    printfw(){
        if(this.isEmpty()){
            return
        }
        let curr = this.head;
        let listvalue = ""
        while(curr){
            listvalue += `${curr.value} `
            curr = curr.next
        }
        console.log(listvalue)
    }

    printbw(){
        if(this.isEmpty()){
            return
        }
        let curr = this.tail;
        let listvalue = ""
        while(curr){
            listvalue += `${curr.value} `
            curr = curr.prev
        }
        console.log(listvalue);
    }



}

let list = new DL()

list.prepend(56)
list.prepend(96)
list.prepend(46)
list.prepend(46)
list.prepend(6)

list.printfw()
list.printbw()