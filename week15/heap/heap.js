 class MaxBinaryHeap{
    constructor(){
        this.values = [49,39,18,27,12,8]
    }

    insert(element){
        this.values.push(element)
        this.bubbleUp()
    }
    //heapify
    bubbleUp(){
        let newElementIndex = this.values.length-1
        let newElement = this.values[newElementIndex];
        while(newElementIndex > 0){
            let parentIndex = Math.floor((newElementIndex-1)/2);
            let parent = this.values[parentIndex];

            if(newElement <= parent)break;
            this.values[parentIndex] = newElement;
            this.values[newElementIndex] = parent;
            newElementIndex=parentIndex;
        }
    }
 

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown()
        }

        return max
    }

    sinkDown(){
        let index = 0;
        const length = this.values.length;
        const element = this.values[0]

        while(true){
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;

            let leftChild,rightChild;

            let swap = null;

            //check th leftChild in out of bound or not

            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex]
                if(leftChild > element){
                    swap = leftChildIndex
                }
            }

            if(rightChildIndex < length){

                rightChild = this.values[rightChildIndex]

                if(
                    (swap === null && rightChild > element)||
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIndex
                }
            }

            if(swap === null)break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap


        }


    }


    displayHeap(){
        console.log(this.values);
        
    }
 } 



 let heap = new MaxBinaryHeap();
heap.displayHeap()
heap.insert(90)
heap.displayHeap()

console.log(heap.extractMax());
heap.displayHeap()


// class Heap{
//     constructor(){
//         this.values = []
//     }


//     insert(value){
//         this.values.push(value);
//         this.bubbleUp()
//     }


//     bubbleUp(){
//         let newElementIndex = this.values.length-1
//         let newElement = this.values[newElementIndex]

//         while(newElementIndex > 0){
//             let parentIndex = Math.floor((newElementIndex-1)/2);
//             let parentElement = this.values[parentIndex]

//             if(newElement <= parentElement)break;

//             this.values[parentIndex] = newElement;
//             this.values[newElementIndex] = parentElement;

//             newElementIndex = parentIndex
//         }
//     }
// }