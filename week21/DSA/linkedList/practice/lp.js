class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  size() {
    return this.size;
  }

  prepend(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  display(){
    let curr = this.head;
    let listValue = "";

    while (curr) {
      listValue += `${curr.data} `;
      curr = curr.next;
    }
    console.log(listValue);
  }

  append(value){
    
    let newNode = new Node(value)
    if(this.isEmpty()){
        this.head = newNode
        this.tail = newNode
    }
     if(this.size === 1 ){
       
       this.head.next = newNode
       this.tail = newNode
    }else{
        this.tail.next  = newNode
        newNode = this.tail
    }

    this.size++
  }

  reverse(){
    let prev = null
    let curr = this.head
    this.tail = curr
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev
  }


}


let list = new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.append(200)
list.display()
list.reverse()
list.display()
console.log(list.isEmpty());

