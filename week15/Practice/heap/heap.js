// class Heap{
//     constructor() {
//         this.values = []
//     }


//     insert(value){
//         this.values.push(value)
//         this.heapify()
//     }


//     heapify(){
//         let  newElementIndex = this.values.length-1
//         let  newElement = this.values[newElementIndex]
 
//          while(newElementIndex > 0){
//              let parentIndex = Math.floor((newElementIndex-1)/2)
//              let parentElement =  this.values[parentIndex]
 
//              if(newElement < parentElement)break;
 
//              this.values[parentIndex] = newElement;
//              this.values[newElementIndex] = parentElement
//              newElementIndex = parentIndex
//          }
//      }


   
//     extractMax() {
//         if (this.values.length === 0) return null; // If the heap is empty, return null

//         const max = this.values[0]; // The root element (largest) is at index 0
//         const end = this.values.pop(); // Remove the last element

//         // If there are still elements left, replace the root with the last element
//         if (this.values.length > 0) {
//             this.values[0] = end; // Move the last element to the root
//             this.heapifyDown(); // Reorganize the heap to maintain the max-heap property
//         }

//         return max; // Return the largest element
//     }

//     // Adjust the heap by moving the root element downwards
//     heapifyDown() {
//         let index = 0; // Start at the root
//         const length = this.values.length; // Get the total number of elements
//         const element = this.values[0]; // The element to sink down

//         while (true) {
//             let leftChildIndex = 2 * index + 1; // Index of the left child
//             let rightChildIndex = 2 * index + 2; // Index of the right child
//             let leftChild, rightChild;
//             let swapIndex = null; // Keep track of the index to swap with

//             // Check if the left child exists and is greater than the current element
//             if (leftChildIndex < length) {
//                 leftChild = this.values[leftChildIndex];
//                 if (leftChild > element) {
//                     swapIndex = leftChildIndex;
//                 }
//             }

//             // Check if the right child exists and is greater than both the current element and the left child
//             if (rightChildIndex < length) {
//                 rightChild = this.values[rightChildIndex];
//                 if (
//                     (swapIndex === null && rightChild > element) || // No swap yet, and right child is greater
//                     (swapIndex !== null && rightChild > leftChild) // Swap set to left, but right is greater
//                 ) {
//                     swapIndex = rightChildIndex;
//                 }
//             }

//             // If no swap is needed, the heap property is restored
//             if (swapIndex === null) break;

//             // Swap the current element with the larger child
//             this.values[index] = this.values[swapIndex];
//             this.values[swapIndex] = element;

//             // Update the index to continue sinking down
//             index = swapIndex;
//         }
//     }





    

//     display(){
//         console.log(this.values);
        
//     }
// }

// let heap =  new Heap()

// heap.insert(34)
// heap.insert(44)
// heap.insert(23)
// heap.insert(34)
// heap.insert(800)
// heap.insert(75)
// heap.insert(90)

// heap.display()

// console.log(heap.extractMax());
 
// heap.display()




class Heap{
    constructor(){
        this.values = []
    }


    insert(value){
        this.values.push(value)
        this.heapyfy()
    }

    heapyfy(){
        let newElementIndex = this.values.length-1
        let newElement = this.values[newElementIndex]

        while(newElementIndex > 0){
            let parentIndex = Math.floor((newElementIndex-1)/2)
            let parentElement = this.values[parentIndex]

           if(newElement < parentElement)break

           this.values[parentIndex] = newElement;
           this.values[newElementIndex] = parentElement

           newElementIndex = parentIndex
        }
    }



    extractMax(){
        if(this.values.length === 0)return null

        let max = this.values[0] 
    }

    heapyfyDown(){
        let index = 0;

        let length = this.values.length;
        let element = this.values[0];


        while(true){
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2

            let leftChild,rightChild
            let swapIndex = null

            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex]
                if(leftChild > element){
                    swapIndex = leftChildIndex
                }
                
            }

            if(rightChildIndex < length){
               rightChild = this.values[rightChildIndex]
               
               if(
                (swapIndex === null)&&(rightChild > element)||
                (swapIndex !== null)&&(rightChild > leftChild)
                ){
                    swapIndex = rightChildIndex
                }
            }

            if(swapIndex===null)break

            this.values[index] = this.values[swapIndex]
            this.values[swapIndex] = element;

            index = swapIndex
        }
    }

    display(){
        console.log(this.values);
    }
}


let heap =  new Heap()

heap.insert(34)
heap.insert(44)
heap.insert(23)
heap.insert(34)
heap.insert(800)
heap.insert(75)
heap.insert(90)

heap.display()

//console.log(heap.extractMax());
 
heap.display()