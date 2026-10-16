class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;

    if(this.isEmpty()){ 
      this.front = 0
      this.rear = 0
    }

    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log({ ...this.items });
  }
}

let queue = new Queue();

queue.enqueue(4);

queue.enqueue(4);

queue.enqueue(4);

queue.enqueue(4);

console.log(queue);

queue.print();

queue.dequeue();

console.log(queue);


