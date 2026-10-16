class Stack {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }

    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }

    return this.stack[this.stack.length - 1];
  }

  sort() {
    const tempStack = new Stack();

    while (!this.isEmpty()) {
      const current = this.pop();

      while (!tempStack.isEmpty() && tempStack.peek() > current) {
        this.push(tempStack.pop());
      }

      tempStack.push(current);
    }

    while (!tempStack.isEmpty()) {
      this.push(tempStack.pop());
    }
  }

  //   reverseStack() {
  //     if (this.isEmpty()) {
  //       console.log("Stack is empty");
  //       return;
  //     }

  //     const auxiliaryStack = new Stack();

  //     // Move all elements to the auxiliary stack
  //     while (!this.isEmpty()) {
  //       const current = this.pop();
  //       auxiliaryStack.push(current);
  //     }

  //     // Move all elements back to the original stack
  //     while (!auxiliaryStack.isEmpty()) {
  //       this.push(auxiliaryStack.pop());
  //     }
  //   }

  reverseStack() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }

    const auxiliaryStack = new Stack();
    const auxiliaryStack2 = new Stack();

    // Move all elements to the auxiliary stack
    while (!this.isEmpty()) {
      // Changed condition
      const current = this.pop();
      auxiliaryStack.push(current);
    }
    // console.log("org",this.stack);

    while (!auxiliaryStack.isEmpty()) {
      auxiliaryStack2.push(auxiliaryStack.pop());
    }

    // Move all elements back to the original stack
    while (!auxiliaryStack2.isEmpty()) {
      this.push(auxiliaryStack2.pop()); // Added parentheses to call pop()
    }
  }

  print() {
    console.log("Stack elements are: ", this.stack);
  }

  removeMiddle() {
    let size = this.size();
    let middleIndex = Math.floor(size / 2);

    const removeRecursive = (currentIndex) => {
      if (currentIndex === middleIndex) {
        this.pop();
        return;
      }

      let temp = this.pop();

      removeRecursive(currentIndex + 1);

      this.push(temp);
    };

    removeRecursive(0);
  }
}

let myStack = new Stack();

myStack.push(10);
myStack.push(100);
myStack.push(1000);
myStack.push(20);
myStack.push(3000);

console.log("Original stack:");
myStack.print();

myStack.reverseStack(); // Reverse the stack in place

console.log("Reversed stack:");
myStack.print();
