class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
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

  push(value) {
    let node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    } else {
      let popedValue = this.head;
      this.head = this.head.next;
      this.size--;
      return popedValue.value;
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    } else {
      return this.head.value;
    }
  }

  sort() {
    console.log("heloo");

    let tempStack = new LinkedListStack();

    while (!this.isEmpty()) {
      const temp = this.pop();

      while (!tempStack.isEmpty() && tempStack.peek() > temp) {
        this.push(tempStack.pop());
      }

      tempStack.push(temp);
    }
      while (!tempStack.isEmpty()) {
        this.push(tempStack.pop());
      }
    
  }


  reverseString(input){

    let tempStack = new LinkedListStack()

    for(let char of input){
        tempStack.push(char)
    }

    let reverse = ''

    while(!tempStack.isEmpty()){
        reverse += tempStack.pop()
    }

    return reverse

  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} `;
      curr = curr.next;
    }

    console.log(listValues);
  }
}

let list = new LinkedListStack();

list.push(90000);
list.push(1000);
list.push(2000);
list.push(3432);
// console.log(list.peek());
// list.print();
// console.log(list.pop())
list.print();
list.sort();
list.print();
