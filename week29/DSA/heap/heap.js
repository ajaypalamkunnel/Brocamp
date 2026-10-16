class MaxHeap{
    constructor(){
        this.heap = [null]
    }


    insert(value){


        this.heap.push(value)

        let currentIndex = this.heap.length - 1

        while(currentIndex > 1){

            let parentIndex = Math.floor(currentIndex/2)

            if(this.heap[currentIndex] > this.heap[parentIndex]){
                [this.heap[currentIndex],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[currentIndex]]
                currentIndex = parentIndex
            }else{
                break
            }

        }

    }

    peek(){
        return this.heap[1]
    }

}