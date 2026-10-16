class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    let node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      let node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      return;
    }

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      removedNode = prev.next;
      prev.next = removedNode.next;
      this.size--;
    }
  }


  search(value){
    if(this.isEmpty()){
      return -1
    }
    let i = 0 
    let curr = this.head
    while(curr){
      if(curr.value === value){
        return i
      }

      curr = curr.next
      i++
    }
    return -1

  }

  reverse(){
    let prev = null
    let curr = this.head
    while(curr){
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty!!");
    } else {
      let listValue = "";
      let curr = this.head;

      while (curr) {
        listValue += `${curr.value} `;
        curr = curr.next;
      }

      console.log("list ==>", listValue);
    }
  }
}

let list = new LinkedList();

list.prepend(20);
list.prepend(40);
list.prepend(60);
list.prepend(80);
list.print();

list.remove(2);

console.log(list.getSize());

list.print();
