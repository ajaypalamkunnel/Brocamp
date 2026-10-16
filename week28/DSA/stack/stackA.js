class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.count == 0) return undefined;
    let deletedItem = this.items[this.count - 1];
    this.count--;
    console.log(`${deletedItem} removed`);
    return deletedItem;
  }

  

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count == 0;
  }

  size() {
    return this.count;
  }

  print() {
    let str = "";

    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " ";
    }

    return str;
  }


  sort() {
    let tempStack = new Stack();

    while (!this.isEmpty()) {
      let temp = this.pop();

      while (!tempStack.isEmpty() && tempStack.peek() > temp) {
        this.push(tempStack.pop());
      }

      tempStack.push(temp);
    }

    while (!tempStack.isEmpty()) {
      this.push(tempStack.pop());
    }
  }

  clear() {
    this.items = [];
    this.count = 0;
    console.log("stack cleared");
    return this.items;
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack.print());
