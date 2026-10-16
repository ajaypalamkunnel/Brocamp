class Heap{
    constructor(){
        this.data = []
    }


    getParentIndex(i){return Math.floor((i-1)/2)}

    getLeftChild(i){return 2*i+1;}

    getRightChild(i){return 2*i+2;}

    swap(i,j){
        [this.data[i],this.data[j]] = [this.data[j],this.data[i]]
    }

    peek(){return this.data[0]}

    size(){return this.data.length}
}

class MaxHeap extends Heap{

    insert(value){
        this.data.push(value)
        this.heapify()
    }

    heapify(){
        let index = this.data.length-1
        let parentIndex = this.getParentIndex(index)

        while(index > 0){
            if(this.data[index] > this.data[parentIndex]){
                this.swap(index,parentIndex)
                index = parentIndex
            }else{
                break
            }
        }

    }

}

const myMaxHeap = new MaxHeap()
myMaxHeap.insert(54)
myMaxHeap.insert(4)
myMaxHeap.insert(54)
myMaxHeap.insert(48)
myMaxHeap.insert(5)  