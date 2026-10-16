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
  // O(1)
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

  // O(n)
  append(value) {
    let node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;

      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }

    this.size++;
  }



  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;

      this.size++;
    }
  }


  removeDuplicate(){
    
    let seen = new Set()
    let curr = this.head
    let prev = null
    
    while(curr){
      
      if(seen.has(curr.value)){
        
        prev.next = curr.next
        this.size--
      }else{
        
        seen.add(curr.value)
        prev  = curr
      }
      
      curr = curr.next
      
    }
    
  }
  

  remove(index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
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
    }

    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("List is Empty");
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;

      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  findMiddle() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log(slow.value);
  }

  deleteMiddle() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }

    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while (fast && fast.next) {
      prev = slow;
      fast = fast.next.next;
      slow = slow.next;
    }

    prev.next = slow.next;
    this.size--;
  }

  mergeList(newList) {
    if (this.isEmpty()) {
      this.head = newList.head;
      this.size = newList.size;
      this.size++;
      return;
    }

    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newList.head;
    this.size += newList.size;
  }


  removeDuplicate(){

    if(this.isEmpty()){
      console.log("List is empty");
      return
    }


    let current = this.head
    let prev = null
    let seen = new Set()

    while(current){

      if(seen.has(current.value)){
        prev.next = current.next
        this.size--
      }else{
        seen.add(current.value)
        prev = current
      }

      current = current.next

    }


  }





  deleteEven() {
    if (this.isEmpty()) {
      console.log("List is Empty");
      return;
    }

    while (this.head && this.head.value % 2 === 0) {
      this.head = this.head.next;
      this.size--;
    }

    let curr = this.head;

    while (curr && curr.next) {
      if (curr.next.value % 2 === 0) {
        curr.next = curr.next.next;
        this.size--;
      } else {
        curr = curr.next;
      }
    }
  }


  isPalindrome() {
  if (!this.head || !this.head.next) return true;

  // Step 1: Find middle (slow will be at mid)
  let slow = this.head;
  let fast = this.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse second half
  let prev = null;
  let curr = slow;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  // Step 3: Compare first half & reversed second half
  let left = this.head;
  let right = prev; // head of reversed half
  while (right) {
    if (left.value !== right.value) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
}
 



  // ------------------------------------------------

  sortBub() {
    if (this.isEmpty() || this.size === 1) {
      return;
    }

    let swapped;

    do {
      swapped = false;
      let curr = this.head;

      while (curr && curr.next) {
        if (curr.value > curr.next.value) {
          let temp = curr.value;
          curr.value = curr.next.value;
          curr.next.value = temp;

          swapped = true;
        }
        curr = curr.next;
      }
    } while (swapped);
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";

      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }

      console.log(listValues);
    }
  }
}

const list = new LinkedList();

list.prepend(40);
list.prepend(50);
list.prepend(60);
list.prepend(60);
list.append(100);

// list.insert(90, 0);
// list.insert(92, 0);
// list.insert(9032, 1);

// list.print();

// let arr = [4, 6, 7, 88, 90];

// arr.forEach((num) => {
//   list.prepend(num);
// });

// list.print();

// let list2 = new LinkedList();

// list2.append(2000);
// list2.append(3003);
// list2.append(4000);
// list2.append(5005);

// list.mergeList(list2);
// list.print();
// // list.deleteEven();
// list.print();
// list.sortBub()
// list.print();
list.print()
list.removeDuplicate()
list.print()