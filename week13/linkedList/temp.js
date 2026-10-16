// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
        
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0
//     }
    
//     isEmpty(){
//         return this.size === 0;
//     }
    
//     addFirst(value){
//         let node = new Node(value);
        
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node
//         }else{
//             node.next = this.head;
//             this.head = node
//         }
        
//         this.size++
//     }
    
//     addLast(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             this.tail.next = node;
//             this.tail = node
//         }
//         this.size++
        
//     }
    
//     addIndex(value,index){
//         let node = new Node(value)
//         if(index < 0 || index > this.size){
//             console.log("Invalid index")
//         }
        
        
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else if(index === 0){
//             node.next = this.head;
//             this.head = node
//         }else if(index === this.size){
//             node.next = this.tail.next;
//             this.tail = node
//         }else{
//             let prev = this.head;
//             for(let i = 0 ; i < index-1 ; i++){
//                 prev = prev.next;
//             }
//             node.next = prev.next;
//             prev.next = node
//         }
//         this.size++
//     }
    
//     print(){
//         let current = this.head;;
//         let listValues = ''
//         while(current){
//             listValues += `${current.value} `
//             current = current.next
//         }
//         console.log(listValues)
//     }
// }

// let list = new LinkedList()

// list.addLast(900);
// list.addFirst(500);
// list.addFirst(600);
// list.addFirst(700);
// list.addIndex(300,2)
// list.print()



// class Node{
//     constructor(value){
//         this.prev = null
//         this.value = value;
//         this.next = null;
//     }
// }

// class DLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }
    
    
//     isEmpty(){
//         return this.size === 0;
//     }
    
//     insertFirst(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             node.next = this.head
//             this.head.prev = node;
//             this.head = node
//         }
//             this.size++
//     }
    
//     insertLast(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             node.prev = this.tail;
//             this.tail.next = node;
//             this.tail = node
//         }
        
//         this.size++
//     }
    
    
//     removeFirst(){
//         if(this.isEmpty()){
//             console.log("List is empty");
//             return
//         }
//         let removed = this.head;
//         this.head = this.head.next;
        
//         this.size--
        
//     }
    
//     removeLast(){
//         if(this.isEmpty()){
//           console.log("List is empty");
//             return 
//         }
//         if(this.size===1){
//             this.head = null;
//             this.tail = null;
//         }else{
//             let previ = this.head;
            
//             while(previ.next !== this.tail)
//             {
//                 previ = previ.next
//             }
//             previ.next = null;
//             this.tail = previ
//         }
        
//         this.size--
//     }
    
//     insertIndex(value,index){
//         let node = new Node(value)
//         if(index < 0 || index > this.size){
//             console.log("Invvalid index");
//             return
//         }
        
//         if(index === 0){
//             insertFirst()
//         }else if(index === this.size){
//             insertLast()
//         }else{
//             let previ = this.head;
            
//             for(let i = 0 ; i < index ; i++){
//                 previ = previ.next;
//             }
            
            
//             node.next = previ.next;
//             node.previ = previ
//             previ.next.prev = node;
//             previ.next = node;
            
//             // node.next = current.next;
//             // node.prev = current;
//             // current.next.prev = node;
//             // current.next = node;
            
//         }
//         this.size++
        
//     }
    
//     reverse(){
//         let prev = null;
//         let curr = this.head;
        
//         while(curr){
//             let nextTemp = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = nextTemp
//         }
//         this.head = prev
//     }
    
    
//     print(){
//         let current = this.head;
//         let listValues = ''
//         while(current){
//             listValues += `${current.value} `;
//             current = current.next;
//         }
//         console.log(listValues)
//     }
// }

// let list = new DLinkedList()


// list.insertLast(2000)
// list.insertFirst(900);
// list.insertFirst(800);
// list.insertFirst(700);
// list.insertIndex(5500,2);
// list.removeFirst()
// //list.removeLast()
// list.print()
// list.reverse()
// list.print()



// function recursiveBinarySearch(arr,target){
//     if(arr.length===0){
//         console.log("Array is Empty")
//         return 
//     }
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
    
//     if(leftIndex>rightIndex){
//         return -1
//     }
    
    
//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//     if(arr[middleIndex] === target){
//         return middleIndex;
//     }
    
//     if(target<arr[middleIndex]){
//       return search(arr,target,leftIndex,middleIndex-1)
//     }else{
//         return search(arr,target,middleIndex+1,rightIndex)
//     }


// }
// console.log(recursiveBinarySearch([3,5,6,7,8,44,66,77,88,99,333],66))



// function selectionSort(arr){
//     let sm = arr[0]
//     let temp 
//     for(let i = 0 ; i < arr.length ; i++){
        
//         for(let j = i+1 ; j < arr.length;j++){
//             if(arr[i] > arr[j]){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp
//             }
//         }
        
//     }
//     console.log(arr)
// }

// selectionSort([5,563,234,4,6,66])




// function moveZerosToEnd(arr){
//     let res = [];
    
//     for(let i = 0;i < arr.length ; i++ ){
//         if(arr[i]!==0){
//             res.push(arr[i])
//         }
//     }
    
//     while(res.length < arr.length){
//         res.push(0)
//     }
    
//     console.log(res)
// }

// moveZerosToEnd([3,4,6,7,3,0,4,0])


// function showOnlyuniqueLetter(str){
//     let strarr = str.split("");
//     let res = []
//     strarr.forEach((value,index)=>{
//         if(strarr.indexOf(value) === strarr.lastIndexOf(value)){
//             res.push(value)
//         }
//     })
    
//     console.log(res)
// }

// showOnlyuniqueLetter("ajay")





class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        //this.prev = null;
    }
}

class SlinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    
    insertFront(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node
        }
        
        this.size++
    }
    
    insertLast(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }
    
    insertIndex(value,index){
        
    }
    
    print(){
        let current = this.head;
        let listValues = '';
        
        while(current){
            listValues += `${current.value} `
            current = current.next
        }
        console.log(listValues)
        
    }
    
    
}

let list = new SlinkedList();

list.insertFront(100)
list.insertFront(200)
list.insertFront(300)
list.insertLast(6000)
list.print()














///////////////////////////////











// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
        
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0
//     }
    
//     isEmpty(){
//         return this.size === 0;
//     }
    
//     addFirst(value){
//         let node = new Node(value);
        
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node
//         }else{
//             node.next = this.head;
//             this.head = node
//         }
        
//         this.size++
//     }
    
//     addLast(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             this.tail.next = node;
//             this.tail = node
//         }
//         this.size++
        
//     }
    
//     addIndex(value,index){
//         let node = new Node(value)
//         if(index < 0 || index > this.size){
//             console.log("Invalid index")
//         }
        
        
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else if(index === 0){
//             node.next = this.head;
//             this.head = node
//         }else if(index === this.size){
//             node.next = this.tail.next;
//             this.tail = node
//         }else{
//             let prev = this.head;
//             for(let i = 0 ; i < index-1 ; i++){
//                 prev = prev.next;
//             }
//             node.next = prev.next;
//             prev.next = node
//         }
//         this.size++
//     }
    
//     print(){
//         let current = this.head;;
//         let listValues = ''
//         while(current){
//             listValues += `${current.value} `
//             current = current.next
//         }
//         console.log(listValues)
//     }
// }

// let list = new LinkedList()

// list.addLast(900);
// list.addFirst(500);
// list.addFirst(600);
// list.addFirst(700);
// list.addIndex(300,2)
// list.print()



// class Node{
//     constructor(value){
//         this.prev = null
//         this.value = value;
//         this.next = null;
//     }
// }

// class DLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }
    
    
//     isEmpty(){
//         return this.size === 0;
//     }
    
//     insertFirst(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             node.next = this.head
//             this.head.prev = node;
//             this.head = node
//         }
//             this.size++
//     }
    
//     insertLast(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             node.prev = this.tail;
//             this.tail.next = node;
//             this.tail = node
//         }
        
//         this.size++
//     }
    
    
//     removeFirst(){
//         if(this.isEmpty()){
//             console.log("List is empty");
//             return
//         }
//         let removed = this.head;
//         this.head = this.head.next;
        
//         this.size--
        
//     }
    
//     removeLast(){
//         if(this.isEmpty()){
//           console.log("List is empty");
//             return 
//         }
//         if(this.size===1){
//             this.head = null;
//             this.tail = null;
//         }else{
//             let previ = this.head;
            
//             while(previ.next !== this.tail)
//             {
//                 previ = previ.next
//             }
//             previ.next = null;
//             this.tail = previ
//         }
        
//         this.size--
//     }
    
//     insertIndex(value,index){
//         let node = new Node(value)
//         if(index < 0 || index > this.size){
//             console.log("Invvalid index");
//             return
//         }
        
//         if(index === 0){
//             insertFirst()
//         }else if(index === this.size){
//             insertLast()
//         }else{
//             let previ = this.head;
            
//             for(let i = 0 ; i < index ; i++){
//                 previ = previ.next;
//             }
            
            
//             node.next = previ.next;
//             node.previ = previ
//             previ.next.prev = node;
//             previ.next = node;
            
//             // node.next = current.next;
//             // node.prev = current;
//             // current.next.prev = node;
//             // current.next = node;
            
//         }
//         this.size++
        
//     }
    
//     reverse(){
//         let prev = null;
//         let curr = this.head;
        
//         while(curr){
//             let nextTemp = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = nextTemp
//         }
//         this.head = prev
//     }
    
    
//     print(){
//         let current = this.head;
//         let listValues = ''
//         while(current){
//             listValues += `${current.value} `;
//             current = current.next;
//         }
//         console.log(listValues)
//     }
// }

// let list = new DLinkedList()


// list.insertLast(2000)
// list.insertFirst(900);
// list.insertFirst(800);
// list.insertFirst(700);
// list.insertIndex(5500,2);
// list.removeFirst()
// //list.removeLast()
// list.print()
// list.reverse()
// list.print()



// function recursiveBinarySearch(arr,target){
//     if(arr.length===0){
//         console.log("Array is Empty")
//         return 
//     }
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
    
//     if(leftIndex>rightIndex){
//         return -1
//     }
    
    
//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//     if(arr[middleIndex] === target){
//         return middleIndex;
//     }
    
//     if(target<arr[middleIndex]){
//       return search(arr,target,leftIndex,middleIndex-1)
//     }else{
//         return search(arr,target,middleIndex+1,rightIndex)
//     }


// }
// console.log(recursiveBinarySearch([3,5,6,7,8,44,66,77,88,99,333],66))



// function selectionSort(arr){
//     let sm = arr[0]
//     let temp 
//     for(let i = 0 ; i < arr.length ; i++){
        
//         for(let j = i+1 ; j < arr.length;j++){
//             if(arr[i] > arr[j]){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp
//             }
//         }
        
//     }
//     console.log(arr)
// }

// selectionSort([5,563,234,4,6,66])




// function moveZerosToEnd(arr){
//     let res = [];
    
//     for(let i = 0;i < arr.length ; i++ ){
//         if(arr[i]!==0){
//             res.push(arr[i])
//         }
//     }
    
//     while(res.length < arr.length){
//         res.push(0)
//     }
    
//     console.log(res)
// }

// moveZerosToEnd([3,4,6,7,3,0,4,0])


// function showOnlyuniqueLetter(str){
//     let strarr = str.split("");
//     let res = []
//     strarr.forEach((value,index)=>{
//         if(strarr.indexOf(value) === strarr.lastIndexOf(value)){
//             res.push(value)
//         }
//     })
    
//     console.log(res)
// }

// showOnlyuniqueLetter("ajay")





class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        //this.prev = null;
    }
}

class SlinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    
    insertFront(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node
        }
        
        this.size++
    }
    
    insertLast(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }
    
    insertIndex(value,index){
        
        if(index < 0 || index > this.size){
            console.log("Invalid Index")
        }
        
        if(index === 0){
            insertFront(value)
        }else if(index === this.size){
            insertLast(value)
        }else{
            let node = new Node(value);
            
            let prev = this.head;
            for(let i = 0 ; i < index-1 ; i++){
                prev = prev.next;
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }
    
    removeFont(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
          let remove = this.head;
          this.head = this.head.next
          this.size--;
        }
        
        
    }
    
    removeBack(){
        if(this.isEmpty()){
            console.log("List is empty")
            return
        }else if(this.size === 1){
            this.head = null;
            this.tail = null
        }else{
            let prev = this.head;
            
            while(prev.next !== this.tail){
                prev = prev.next
            }
            
            prev.next = null;
            this.tail = prev
        }
        this.size--
    }
    
    search(value){
        let current = this.head;
        
        let i = 0;
        while(current){
            if(current.value === value){
                console.log("search value found at : ",i)
                return null
            }
            current = current.next;
            i++
        }
        console.log("serach not found")
        return null
        
    }
    
    reverse(){
        let current = this.head;
        let prev = null;
        
        while(current){
            let temp = current.next
            current.next = prev;
            prev = current;
            current = temp
        }
        
        this.head = prev
    }
    
    print(){
        let current = this.head;
        let listValues = '';
        
        while(current){
            listValues += `${current.value} `
            current = current.next
        }
        console.log(listValues)
        
    }
    
    
}

let list = new SlinkedList();

list.insertFront(100)
list.insertFront(200)
list.insertFront(300)
list.insertLast(6000)
list.insertIndex(111,2)
list.search(111)
list.print()
list.removeFont()
list.print()
list.removeBack()
list.print()
list.reverse()
list.print()

// class Node{
//     constructor(value){
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//     }
// }

// class DLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0
//     }
    
//     isEmpty(){
//         return this.size === 0
//     }
    
    
//     insertFirst(value){
//         let node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             this.head.prev = node;
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++
//     }
    
//     insertLast(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             node.prev = this.tail;
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.size++
//     }
    
    
//     insertIndex(value,index){
//         if(index < 0 || index > this.size){
//             console.log("Invalid index");
//             return null
//         }
        
//             let node = new Node(value)
//         if(index === 0){
//             if(this.head === null){
//                 this.head = node;
//                 this.tail = node;
//             }else{
//                 node.next = this.head
//                 this.head.prev = node
//                 this.head = node;
//             }
//         }else{
//             let prev = this.head;
            
//             for(let i = 0; i < index-1 ; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next.prev = node;
//             prev.next = node;
//             node.prev = prev;
//         }
//     }
    
//     removeFront(){
//         if(this.isEmpty()){
//             console.log("list is empty");
//             return null
//         }
//         this.head = this.head.next;
//         if(this.head){
//             this.head.prev = null
//         }
//         this.size--
//     }
    
//     removeLast(){
//       if(this.isEmpty()){
//             console.log("list is empty");
//             return null
//         }
        
//         if(this.size === 1){
//             this.head=null;
//             this.tail=null
//         }else{
//             let prev = this.head;
            
//             while(prev.next !== this.tail){
//                 prev = prev.next
//             }
//             prev.next = null;
//             this.tail = prev
//         }
//         this.size--
//     }
    
//     print(){
//         let curr = this.head;
//         let listValues = '';
//         while(curr){
//             listValues += `${curr.value} `;
//             curr = curr.next
//         }
        
//         console.log(listValues)
//     }
// }

// let list = new DLinkedList();

// list.insertFirst(100);
// list.insertFirst(200);
// list.insertFirst(300);
// list.insertLast(700)
// list.insertLast(800)
// list.removeFront()
// list.insertIndex(600,2)
// list.removeLast()
// list.print()