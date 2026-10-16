class Heap{
    constructor(){
        this.values = []
    }


    insert(value){
        if(!value){
            console.log("No value!!");
            return    
        }else{
            this.values.push(value)
            this.heapify()
        }

    }


    heapify(){
        let newElementIndex = this.values.length - 1
        let newElement = this.values[newElementIndex]

        while(newElementIndex > 0){
            let parentIndex = Math.floor((newElementIndex-1)/2)
            let parentElement = this.values[parentIndex]

            if(newElement < parentElement)break

            this.values[parentIndex] = newElement
            this.values[newElementIndex] = parentElement
            
            newElementIndex = parentIndex

        }
    }

    display(){
        console.log(this.values);
        
    }


    extractMax(){
        let max = this.values[0]
        let end = this.values.pop()

        if(this.values.length > 0){
            this.values[0] = end
            this.sinkDown()
        }
        return max
    }

    sinkDown(){
        let index = 0
        let length = this.values.length
        let element = this.values[0]


        while(true){
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let leftChild,rightChild
            let swap = null

            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex]

                if(leftChild>element){
                    swap = leftChildIndex
                }
            }

            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex]

                if(
                    (swap === null && rightChild > element)||
                    (swap !== null &&  rightChild > leftChild)
                ){
                    swap = rightChildIndex
                }
            }

            if(swap===null)return

            this.values[index] = this.values[swap]
            this.values[swap] = element

            index = swap

        }
    }


}




let heap = new Heap()

heap.insert(30)
heap.insert(10)
heap.insert(37)
heap.insert(98)
heap.insert(80)
heap.insert(43)

heap.display()

console.log(heap.extractMax());
