// class MaxBinary{
//     constructor() {
//         this.values = [49,39,18,27,12,8]  
//     }

//     insert(element){
//         this.values.push(element)
//         this.bubbleUp()
//     }

//     bubbleUp(){
//         let newElementIndex = this.values.length-1;
//         let element = this.values[newElementIndex];

//         while(newElementIndex > 0){
//             let parentIndex = Math.floor((newElementIndex-1)/2);
//             let parent = this.values[parentIndex];

//             if(element <= parent)break
//             this.values[parentIndex] = element;
//             this.values[newElementIndex] = parent;
//             newElementIndex = parentIndex
//         }

//     }
    
// }




// class MaxBinaryHeap{
//     constructor() {
//         this.values = []
//     }

//     insert(element){
//         this.values.push(element)
//         this.bubbleUp()
//     }

//     bubbleUp(){
//         let newElementIndex = this.values.length-1;
//         let newElement = this.values[newElementIndex];


//         while(newElementIndex > 0){
//             let parentIndex = Math.floor((newElementIndex-1)/2);
//             let parentElement = this.values[parentIndex]

//             if(newElement <= parentElement)break

//             this.values[parentIndex] = newElement;
//             this.values[newElementIndex] = parentElement;
//             newElementIndex = parentIndex

//         }
//     }


    

//     displayHeap(){
//         console.log(this.values);
        
//     }
// }

// let heap = new MaxBinaryHeap()

// heap.insert(34)
// heap.insert(64)
// heap.insert(66)
// heap.insert(89)
// heap.insert(88)
// heap.insert(4234)

// heap.displayHeap()




// class MyHeap{
//     constructor(){
//         this.values = []
//     }

//     insert(value){
//         this.values.push(value);
//         this.bubbleUp()
//     }


//     bubbleUp(){
//         let newElementIndex = this.values.length-1;
//         let newElement = this.values[newElementIndex]

//         while(newElementIndex > 0){
//             let parentIndex = Math.floor((newElementIndex-1)/2)
//             let parentElement = this.values[parentIndex]


//             if(newElement <= parentElement)break

//             this.values[parentIndex] = newElement;
//             this.values[newElementIndex] = parent;
//             newElementIndex = parentIndex

//         }
//     }
// }


class MaxBinaryHeap{
    constructor(){
        this.items = []
    }


    insert(value){
        this.items.push(value)
        this.bubbleUp()
    }


    bubbleUp(){
        let newElementIndex = this.items.length -1;
        let newElement = this.items[newElementIndex]

        while(newElementIndex > 0){
            let parentIndex = Math.floor((newElementIndex-1)/2);
            let parentElement = this.items[parentIndex]

            if(newElement < parentElement)break;
            this.items[newElementIndex] = parentElement;
            this.items[parentIndex] = newElement;
            newElementIndex = parentIndex
        }
    }


    displayHeap(){
        console.log(this.items);
        
    }

}


let heap = new MaxBinaryHeap()

heap.insert(30)
heap.insert(64)
heap.insert(76)
heap.insert(79)
heap.insert(87)
heap.insert(77)

heap.displayHeap()