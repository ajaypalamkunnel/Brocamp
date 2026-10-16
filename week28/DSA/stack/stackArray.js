class ArrayStack {
  constructor() {
    this.stack = [];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Get the size of the stack
  getSize() {
    return this.stack.length;
  }

  // Push element to the stack
  push(value) {
    this.stack.push(value);
  }

  // Pop element from the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    return this.stack.pop();
  }

  // Peek at the top element
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    return this.stack[this.stack.length - 1];
  }

  // Print stack values
  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    console.log(this.stack.join(" "));
  }

  // Sort the stack (ascending order using temporary stack)
  sort() {
    let tempStack = new ArrayStack();

    while (!this.isEmpty()) {
      const temp = this.pop();

      while (!tempStack.isEmpty() && tempStack.peek() > temp) {
        this.push(tempStack.pop());
      }

      tempStack.push(temp);
    }

    // Move sorted elements back to original stack
    while (!tempStack.isEmpty()) {
      this.push(tempStack.pop());
    }
  }

  // Reverse a string using stack
  reverseString(input) {
    let tempStack = new ArrayStack();

    for (let char of input) {
      tempStack.push(char);
    }

    let reversed = '';
    while (!tempStack.isEmpty()) {
      reversed += tempStack.pop();
    }

    return reversed;
  }
}
